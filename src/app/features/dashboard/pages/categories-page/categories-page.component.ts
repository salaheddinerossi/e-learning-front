import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../../../shared/models/Option";
import {CategoryWithParent} from "../../../courseCreation/models/CategoryWithParent";
import {CategoryService} from "../../services/category.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent implements OnInit {

  categoryForm: FormGroup;
  isUpdate = false;

  allCategories: CategoryWithParent[] = [];
  selectedCategories: number[] = [];
  categoryOptions: Option[][] = [];
  categoryId?:number;


  typeOptions: Option[] = [
    {value: true, label: 'Contains categories'},
    {value: false, label: 'Does not contain categories'}
  ]

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private toasterService: ToastrService,private router:Router) {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      containsCategories: ['', Validators.required],
      categoriesForm: this.fb.array([]),
      parent_id: ['', Validators.required],
    });
  }


  get categoriesForm(): FormArray {
    return this.categoryForm.get('categoriesForm') as FormArray;
  }

  addCategory() {
    this.categoriesForm.push(this.fb.group({
      categoryId: ['', Validators.required]
    }));
  }

  ngOnInit() {
    this.loadCategories();
  }


  getCategoryOptions(index: number): Option[] {

    let parentCategoryId: number | null = null;

    if (index !== 0) {
      parentCategoryId = this.selectedCategories[index - 1];
    }


    return this.allCategories
      .filter(category => category.parentCategoryId == parentCategoryId)
      .map(category => ({
        label: category.title,
        value: category.id
      }));
  }


  onCategoryChange(event: any, index: number) {

    this.selectedCategories[index] = event.target.value;
    this.categoryOptions[index + 1] = this.getCategoryOptions(index + 1);

    if (this.categoriesForm.length > index + 1) {
      while (this.categoriesForm.length > index + 1) {
        this.categoriesForm.removeAt(index + 1);
      }

      this.categoryOptions.splice(index + 1, this.categoryOptions.length - index - 1);
      this.selectedCategories.splice(index + 1, this.selectedCategories.length - index - 1);
    }

    if (this.getSubCategories(this.selectedCategories[index]).length > 0) {
      this.addCategory();
    }
  }

  getSubCategories(parentCategoryId: number | null): CategoryWithParent[] {
    return this.allCategories
      .filter(category => category.parentCategoryId == parentCategoryId)
      .map(category => ({
        ...category,
        subCategories: this.getSubCategories(category.id)
      }));
  }


  protected readonly environment = environment;

  onSubmit() {

    this.categoryForm.patchValue({
      parent_id: this.selectedCategories[this.selectedCategories.length - 1]
    });

    let formCopy = {...this.categoryForm.value};

    delete formCopy.categoriesForm;

    const category = this.allCategories.find(category => category.id === formCopy.categoryId);

    if (category && category.containsCategories) {
      this.toasterService.error('You cannot select a category that contains subcategories');
      return;
    }



    if (this.isUpdate) {

      delete formCopy.containsCategories;
      delete formCopy.parent_id;

      this.updateCategory(formCopy);

      return;
    }

    if (this.categoryForm.valid) {
      this.submitForm(formCopy);
    } else {
      this.categoryForm.markAllAsTouched();
    }


  }

  updateCategory(form:any){
    this.categoryService.updateCategory(form,this.categoryId!).subscribe(
        data => {

          if (data.data){
            this.allCategories = this.allCategories.map(
                category => {
                  if (category.id == this.categoryId! && category && data.data){
                    return data.data
                  }else{
                    return category;
                  }
                }
            )
          }
          this.toasterService.success("category has been updated");
          this.isUpdate=false;
          this.categoryForm.reset();

        },error => {
          this.toasterService.error(error.error)
        }

    )
  }

  submitForm(formCopy: any) {
    if (this.categoryForm.valid) {

      this.categoryService.createCategory(formCopy).subscribe(
        data => {
          if (data.data) {
            console.log(data.data)
            this.allCategories.push(data.data)
            this.categoryForm.reset();
            this.toasterService.success("category has been created");
          }
        },error => {
          this.toasterService.error(error.error)
        }
      )
    }
  }


  loadCategories() {
    this.categoryService.loadCategories().subscribe(
      data => {
        if (data.data) {
          this.allCategories = data.data;
          this.allCategories.push({id: null, title: 'Root', parentCategoryId: null, containsCategories: true});

          this.categoryOptions[0] = this.getCategoryOptions(0);

          this.addCategory();
        }
      }
    );
  }

  modifyCategory(id:number){
    this.isUpdate= true;
    this.categoryId=id;
    this.allCategories.map(
        category => {
          if (category.id === id){
            this.categoryForm.patchValue({
              title:category.title,
              description:category.description
            })
          }
        }
    )
  }

}
