import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseCreationFormService} from "../../services/course-creation-form.service";
import {SkillName} from "../../models/SkillName";
import {Option} from "../../../../shared/models/Option";
import {CategoryWithParent} from "../../models/CategoryWithParent";

@Component({
  selector: 'app-step1-page',
  templateUrl: './step1-page.component.html',
  styleUrl: './step1-page.component.css'
})
export class Step1PageComponent implements OnInit{

  SkillOptions: Option[] = [];
  allCategories: CategoryWithParent[]= [];

  categories: CategoryWithParent[] = [];
  courseForm: FormGroup;

  selectedCategories:number[]= [];

  constructor(private fb: FormBuilder, private courseCreationService: CourseCreationFormService) {
      this.courseForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        skillId: ['', Validators.required],
        finalCategory: ['', Validators.required],
        selectedOption: ['', Validators.required],
        categoriesForm: this.fb.array([])

      });
  }

  addCategory() {
    this.categoriesForm.push(this.fb.group({
      categoryId: ['', Validators.required]
    }));
  }

  get categoriesForm(): FormArray {
    return this.courseForm.get('categoriesForm') as FormArray;
  }

  ngOnInit() {
    this.loadSkillsOptions();
    this.loadCategories();
    this.addCategory();
  }

  loadSkillsOptions(){
    this.courseCreationService.loadSkillsOptions().subscribe(
        data =>{
          if (data.data){
            this.SkillOptions = data.data.map((skill:SkillName)=>({
              label:skill.name,
              value:skill.id
            }));
          }
        }
    );
  }


  loadCategories() {
    this.courseCreationService.loadCategories().subscribe(
        data => {
          console.log(data);
          if (data.data) {
            this.allCategories = data.data;

            //map all categories in a recursive way in which each category has a subCategories property
            this.categories = this.allCategories
                .filter(category => category.parentCategoryId === null)
                .map(category => ({
                  ...category,
                  subCategories: this.getSubCategories(category.id)
                }));


            console.log(this.categories)
          }
        }
    );
  }

  getCategoryOptions(parentCategoryId: number|null): Option[] {
    console.log("before parentCategoryId",parentCategoryId);
    if (parentCategoryId === 0) {
      parentCategoryId = null;
    }

    else if(parentCategoryId !== null){
      parentCategoryId = this.selectedCategories[parentCategoryId-1];
    }
    console.log("parentCategoryId",parentCategoryId)

    console.log(parentCategoryId)
    return this.allCategories
        .filter(category => category.parentCategoryId === parentCategoryId)
        .map(category => ({
          label: category.title,
          value: category.id
        }));
  }

  onCategoryChange(event:any,index: number) {
    console.log(event.target.value,index)
    this.selectedCategories[index] = event.target.value;
    console.log("selectedCategories",this.selectedCategories)
    this.addCategory();

  }

    getSubCategories(parentCategoryId: number): CategoryWithParent[] {
        return this.allCategories
            .filter(category => category.parentCategoryId === parentCategoryId)
            .map(category => ({
            ...category,
            subCategories: this.getSubCategories(category.id)
            }));
    }






  protected readonly environment = environment;
}
