import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseCreationFormService} from "../../services/course-creation-form.service";
import {SkillName} from "../../models/SkillName";
import {Option} from "../../../../shared/models/Option";
import {CategoryWithParent} from "../../models/CategoryWithParent";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorData} from "../../../../shared/models/ErrorData";

@Component({
  selector: 'app-step1-page',
  templateUrl: './step1-page.component.html',
  styleUrl: './step1-page.component.css'
})
export class Step1PageComponent implements OnInit {

  SkillOptions: Option[] = [];
  allCategories: CategoryWithParent[] = [];

  courseForm: FormGroup;
  categoryOptions: Option[][] = [];

  selectedCategories: number[] = [];
  courseId?: number;

  isUpdate = false
  loading: boolean = true;
  hasError: boolean = false;
  selectedFile: File | null = null;

  error: ErrorData = {
    errorTitle: environment.notFound.courseNotFound,
    errorDescription: environment.notFound.chaptersNotFoundDescription
  }


  constructor(private fb: FormBuilder, private courseCreationService: CourseCreationFormService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
    this.courseForm = this.fb.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      about: ['', Validators.required],
      requirements: ['', Validators.required],
      languageEnum: ['', Validators.required],
      courseLevelEnum: ['', Validators.required],
      skillId: ['', Validators.required],
      categoryId: ['', Validators.required],
      categoriesForm: this.fb.array([]),
    });

    this.courseForm.get('image')?.valueChanges.subscribe((file: File) => {
      this.selectedFile = file;
      this.checkFileType(file);
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

    this.route.params.subscribe(params => {
      if (params["id"]) {

        this.courseId = params["id"];
        this.loadCourse(params["id"]);
        this.isUpdate = true;

      }
    });


  }

  loadSkillsOptions() {
    this.courseCreationService.loadSkillsOptions().subscribe(
      data => {
        if (data.data) {
          this.SkillOptions = data.data.map((skill: SkillName) => ({
            label: skill.name,
            value: skill.id
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

  getCategories(categoryId: number): void {
    // Clear previous selections and form inputs
    this.selectedCategories = [];
    this.categoryOptions = [];
    this.categoriesForm.clear();

    // Initialize the root category options
    this.categoryOptions[0] = this.allCategories
      .filter(category => category.parentCategoryId === null)
      .map(category => ({
        label: category.title,
        value: category.id
      }));

    // A recursive function to build the full path of categories from the selected category
    const populateCategories = (currentCategoryId: number, depth: number) => {
      const category = this.allCategories.find(cat => cat.id === currentCategoryId);
      if (category) {
        // Add this category to the selected path
        if (category.id !== null) {
          this.selectedCategories[depth] = category.id;
        }

        // Get the next set of options based on this category
        if (category.parentCategoryId !== null) {
          this.categoryOptions[depth] = this.allCategories
            .filter(cat => cat.parentCategoryId === category.parentCategoryId)
            .map(cat => ({
              label: cat.title,
              value: cat.id
            }));
        }

        // Prepare the next level if there's a parent
        if (category.parentCategoryId) {
          populateCategories(category.parentCategoryId, depth - 1);
        }
      }
    };

    // Determine the depth of the current category
    let depth = 0;
    let current = this.allCategories.find(cat => cat.id === categoryId);
    while (current && current.parentCategoryId) {
      depth++;
      current = this.allCategories.find(cat => cat.id === current!.parentCategoryId);
    }

    // Populate categories from the selected category upwards
    populateCategories(categoryId, depth);

    // Create form inputs for each level of the category selection
    for (let i = 0; i <= depth; i++) {
      this.addCategory();
      this.categoriesForm.at(i).patchValue({categoryId: this.selectedCategories[i]});

      // Update the next level options if needed
      if (i < depth) {
        this.categoryOptions[i + 1] = this.allCategories
          .filter(cat => cat.parentCategoryId === this.selectedCategories[i])
          .map(cat => ({
            label: cat.title,
            value: cat.id
          }));
      }
    }

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

    if (this.isUpdate) {
      this.updateCourse(formCopy);
    } else {
      if (this.courseForm.valid) {
        this.submitForm(formCopy);
      } else {
        this.courseForm.markAllAsTouched();
      }
    }
  }

  submitForm(formCopy: any) {
    if (this.courseForm.valid) {
      const formData = new FormData();
      formData.append('image', this.selectedFile!);
      for (const key in formCopy) {
        formData.append(key, formCopy[key]);
      }

      this.courseCreationService.createCourse(formData).subscribe(
        data => {
          this.router.navigate(['/step2/' + data.data.id]);
          this.toastr.success("Course created");
        },
        error => {
          this.toastr.error(error.error.message);
        }
      )
    } else {
      this.toastr.error("form is not valid")
      this.courseForm.markAllAsTouched();
    }
  }

  updateCourse(formCopy: any) {
    if (this.courseForm.valid) {
      const formData = new FormData();
      formData.append('image', this.selectedFile!);
      for (const key in formCopy) {
        formData.append(key, formCopy[key]);
      }

      this.courseCreationService.updateCourse(formData, this.courseId!).subscribe(
        data => {
          this.router.navigate(['/step2/' + data.data.id]);
          this.toastr.success("Course updated");
        },
        error => {
          this.toastr.error(error.error.message);
        }
      );
    } else {
      this.toastr.error("Form is not valid");
      this.courseForm.markAllAsTouched();
    }
  }

  loadCourse(id: string) {
    this.courseCreationService.loadCourse(id).subscribe(
      data => {
        if (data.data) {

          data.data.image = null;

          this.courseForm.patchValue(data.data);
          this.getCategories(data.data.categoryId);
          console.log(data.data.categoryId)
        }

        this.loading = false;

      }, error => {
        this.hasError = true;
        this.loading = false;
      }
    )
  }

  checkFileType(file: File | null): void {
    if (file && !file.type.startsWith('image/')) {
      this.courseForm.get('image')?.setErrors({ invalidFileType: true });
      this.toastr.error('Please upload a valid image file.');
    } else {
      this.courseForm.get('image')?.setErrors(null);
    }
  }


  protected readonly environment = environment;
}
