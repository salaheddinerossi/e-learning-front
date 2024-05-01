import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseCreationFormService} from "../../services/course-creation-form.service";
import {SkillName} from "../../models/SkillName";
import {Option} from "../../../../shared/models/Option";
import {CategoryWithParent} from "../../models/CategoryWithParent";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step1-page',
  templateUrl: './step1-page.component.html',
  styleUrl: './step1-page.component.css'
})
export class Step1PageComponent implements OnInit{

  SkillOptions: Option[] = [];
  allCategories: CategoryWithParent[]= [];

  courseForm: FormGroup;
  categoryOptions: Option[][] = [];

  selectedCategories:number[]= [];

  constructor(private fb: FormBuilder, private courseCreationService: CourseCreationFormService,private toastr: ToastrService,private router:Router) {
      this.courseForm = this.fb.group({
        image:[''],
        title: ['', Validators.required],
        about: ['', Validators.required],
        requirements: ['', Validators.required],
        languageEnum: ['', Validators.required],
        courseLevelEnum: ['', Validators.required],
        skillId: ['', Validators.required],
        categoryId: ['', Validators.required],
        categoriesForm: this.fb.array([]),
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
              if (data.data) {
                  this.allCategories = data.data;

                  this.categoryOptions[0] = this.getCategoryOptions(0);

                  this.addCategory();
              }
          }
      );
  }

  getCategoryOptions(index: number): Option[] {

    let parentCategoryId:number|null =null;

    if(index !== 0){
        parentCategoryId = this.selectedCategories[index-1];
    }



    return this.allCategories
        .filter(category => category.parentCategoryId == parentCategoryId)
        .map(category => ({
            label: category.title,
            value: category.id
        }));
  }

  onCategoryChange(event:any,index: number) {

      this.selectedCategories[index] = event.target.value;
      this.categoryOptions[index + 1] = this.getCategoryOptions(index + 1);

      if (this.categoriesForm.length > index + 1) {
          while(this.categoriesForm.length > index + 1) {
                  this.categoriesForm.removeAt(index + 1);
          }

          this.categoryOptions.splice(index + 1, this.categoryOptions.length - index - 1);
          this.selectedCategories.splice(index + 1, this.selectedCategories.length - index - 1);
      }

      if(this.getSubCategories(this.selectedCategories[index]).length>0){
          this.addCategory();
      }
  }

  getSubCategories(parentCategoryId: number|null): CategoryWithParent[] {
      return this.allCategories
          .filter(category => category.parentCategoryId == parentCategoryId)
          .map(category => ({
          ...category,
          subCategories: this.getSubCategories(category.id)
          }));
  }



  onSubmit() {
    this.courseForm.patchValue({
      categoryId: this.selectedCategories[this.selectedCategories.length - 1]
    });

    let formCopy = { ...this.courseForm.value };

    delete formCopy.categoriesForm;

    const category = this.allCategories.find(category => category.id === formCopy.categoryId);
    if (category && category.containsCategories) {
      this.toastr.error('You cannot select a category that contains subcategories');
      return;
    }

    if (this.courseForm.valid) {
      this.submitForm(formCopy);

    }else{
      this.courseForm.markAllAsTouched();
    }
  }

  submitForm(formCopy: any) {
    if (this.courseForm.valid){
      this.courseCreationService.createCourse(formCopy).subscribe(
          data => {
            this.router.navigate(['/step2/'+data.data.id]);
            this.toastr.success("Course created");
          },
          error => {
            this.toastr.error(error.error.message);
          }
      )
    }else {
      this.toastr.error("form is not valid")
      this.courseForm.markAllAsTouched();
    }
  }



  protected readonly environment = environment;
}
