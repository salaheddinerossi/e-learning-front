import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/Category";
import {ActivatedRoute} from "@angular/router";
import {CategoryName} from "../../models/CategoryName";
import {ErrorData} from "../../../../shared/models/ErrorData";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent implements OnInit {

  constructor(
      private categoryService:CategoryService,
      private activatedRoute: ActivatedRoute
  ) {
  }

  isRoot:Boolean=true;
  loading:boolean=true;

  error:ErrorData = {
    errorTitle:environment.notFound.categoriesNotFound,
    errorDescription:environment.notFound.categoriesNoFoundDescription
  }


  categories:Category[] = [];
  categoryNames:CategoryName[] = [];
  currentCategoryId?:number;

  mainTitle:string = environment.categoriesTitle.mainTitle;

  ngOnInit(): void {
    // Subscribe to route parameters
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.handleIdPresent(id);
        this.isRoot=false;
      } else {
        this.loadRootCategories();
      }
    });
  }

  private handleIdPresent(id: string): void {


    this.categoryService.getCategoriesByParentCategory(id).subscribe(
        data => {
          this.categories = data.data.categoryResponses;
          this.mainTitle= data.data.title;
          this.currentCategoryId = data.data.id;
          this.loading= false;

        },
        error => {
          this.handleError(error)
        }
    )

    this.categoryService.getCategoriesNamesBySubCategory(id).subscribe(
        data => {
          this.categoryNames = data.data;
        },
      error => {
        console.log(error);
      }
    );


  }

  private loadRootCategories(): void {
    this.loading = true;
    this.categoryService.getRootCategories().subscribe(

        data => {
          this.categories = data.data;
          this.loading=false;
        },
        error => {
          this.handleError(error);
        }
    );
  }

  private handleError(error: HttpErrorResponse): void {
    this.error.errorCode = error.status;
    this.error.errorTitle = 'Error fetching categories';
    this.error.errorDescription = error.error ? error.error.message : `An error occurred `;
    this.loading = false;
  }


  protected readonly environment = environment;
}
