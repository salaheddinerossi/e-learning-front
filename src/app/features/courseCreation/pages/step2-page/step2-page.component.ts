import {Component, OnInit} from '@angular/core';
import {CourseCreationFormService} from "../../services/course-creation-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../../environment";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../../../shared/models/Option";
import {CourseDetails} from "../../../../shared/models/CourseDetails";
import {ChapterCourseResponses} from "../../../../shared/models/ChapterCourseResponses";
import {ChapterWithParentId} from "../../models/ChapterWithParentId";
import {ToastrService} from "ngx-toastr";
import {ErrorData} from "../../../../shared/models/ErrorData";

@Component({
  selector: 'app-step2-page',
  templateUrl: './step2-page.component.html',
  styleUrl: './step2-page.component.css'
})
export class Step2PageComponent implements OnInit {


  id!: string;
  chapterForm: FormGroup;
  typeOptions: Option[] = [
    {value: true, label: 'Contains chapters'},
    {value: false, label: 'Does not contain chapters'}
  ]

  allChapters: ChapterWithParentId[] = [];
  selectedChapterId: number[] = [];
  chapterOptions: Option[][] = [];
  isUpdate = false;
  chapterId?: number;
  parentChapterId?: number;
  loading:boolean=true;
  hasError:boolean=false;

  courseDetails: CourseDetails = {
    id: 0,
    image: "",
    title: "",
    about: "",
    requirements: "",
    languageEnum: "",
    courseLevelEnum: "",
    skillId: 0,
    chapterCourseResponses: [],
    skillName: ""
  };

  error:ErrorData = {
    errorTitle:environment.notFound.chaptersNotFound,
    errorDescription:environment.notFound.chaptersNotFoundDescription
  }



  constructor(private courseCreationFormService: CourseCreationFormService, private route: ActivatedRoute, private fb: FormBuilder, private toasterService: ToastrService, private router: Router) {

    this.chapterForm = this.fb.group({
      title: ['', Validators.required],
      containsChapters: ['', Validators.required],
      parent_id: ['', Validators.required],
      chaptersForm: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getCourseDetails();
      if (params['chapterId']) {
        this.isUpdate = true;
        this.chapterId = params['chapterId'];
        this.loadChapter(this.chapterId!);

      }
    });
  }

  extractAllChapters(chapters: ChapterCourseResponses[], parentId: number | null = null): ChapterWithParentId[] {
    let allChapters: ChapterWithParentId[] = [];

    for (let chapter of chapters) {
      allChapters.push({
        id: chapter.id,
        title: chapter.title,
        parentId: parentId,
        containsChapters: chapter.containsChapters,
      });

      if (chapter.childChapters && chapter.childChapters.length > 0) {
        allChapters = allChapters.concat(this.extractAllChapters(chapter.childChapters, chapter.id));
      }
    }

    return allChapters;
  }

  get chaptersForm() {
    return this.chapterForm.get('chaptersForm') as FormArray;
  }


  getCourseDetails() {
    this.courseCreationFormService.getCourseById(this.id).subscribe(
      data => {
        if (data.data) {
          this.courseDetails = data.data;
          this.allChapters = this.extractAllChapters(this.courseDetails.chapterCourseResponses);
          this.allChapters.push({id: null, title: 'Root', parentId: null, containsChapters: true});
          this.allChapters = this.allChapters.filter(chapter => chapter.containsChapters);
          this.loading=false;
          this.chapterOptions[0] = this.getChapterOptions(0);
          this.addChapter();
        }
      },
      error => {
        this.hasError=true;
        this.loading=false;
        console.error('Error loading course details:', error.error);
        this.toasterService.error('Failed to load course details.');
      }
    );
  }

  onChapterChange(event: any, index: number) {

    this.selectedChapterId[index] = event.target.value;
    this.chapterOptions[index + 1] = this.getChapterOptions(index + 1);

    if (this.chaptersForm.length > index + 1) {

      while (this.chaptersForm.length > index + 1) {
        this.chaptersForm.removeAt(index + 1);
      }

      this.chapterOptions.splice(index + 1, this.chapterOptions.length - index - 1);
      this.selectedChapterId.splice(index + 1, this.selectedChapterId.length - index - 1);
    }

    if (this.hasSubChapters(event.target.value)) {
      this.addChapter();
    }

  }

  addChapter() {
    this.chaptersForm.push(this.fb.group({
      chapterId: ['']
    }));
  }

  getChapterOptions(index: number): Option[] {

    let parentChapterId: number | null = null;

    if (index !== 0) {
      parentChapterId = this.selectedChapterId[index - 1];
    }
    return this.getChaptersRecursive(parentChapterId);
  }

  getChaptersRecursive(parentChapterId: number | null): Option[] {
    let options: Option[] = [];

    for (let chapter of this.allChapters) {
      if (chapter.parentId == parentChapterId) {
        options.push({
          label: chapter.title,
          value: chapter.id
        });
      }
    }
    return options;
  }


  hasSubChapters(parentChapterId: number | null): boolean {
    return this.allChapters
      .some(chapter => chapter.parentId == parentChapterId);
  }

  onSubmit() {
    this.chapterForm.patchValue(
      {
        parent_id: this.selectedChapterId[this.selectedChapterId.length - 1]
      },
    );

    this.chapterForm.addControl(
      'course_id',
      this.fb.control(this.id)
    )

    let formCopy = {...this.chapterForm.value};

    delete formCopy.chaptersForm;

    if (this.isUpdate) {
      formCopy.id = this.chapterId;
      delete formCopy.course_id;
      delete formCopy.parent_id;
      delete formCopy.containsChapters;
      this.updateChapter(formCopy);

      return
    }

    if (this.chapterForm.valid) {
      this.createChapter(formCopy);
    }

    if (this.chapterForm.invalid) {
      this.toasterService.error('Please fill in all the required fields');
    }
  }

  createChapter(form: any) {
    this.courseCreationFormService.createChapter(form).subscribe(
      data => {

        if (data.data) {

          if (data.data.containsChapters) {
            this.allChapters.push(data.data);
          }


          this.toasterService.success("Chapter Created");


          this.chapterForm.patchValue({
            title: ""
          })

          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([this.router.url]);

        }
      }, error => {
        this.toasterService.error(error.error.message);
      }
    );
  }


  loadChapter(id: number) {
    this.courseCreationFormService.loadChapter(id).subscribe(
      data => {
        if (data && data.data) {
          this.chapterForm.patchValue({
            title: data.data.title,
            containsChapters: data.data.containsChapters,
            parent_id: data.data.parentChapter_id
          });
          this.loading=false;
          this.parentChapterId = data.data.parentChapter_id;
        } else {
          this.toasterService.error('Failed to load chapter details.');
        }
      },
      error => {
        this.hasError=true;
        this.loading=false;
        console.error('Error loading chapter:', error);
        this.toasterService.error('Failed to load chapter details.');
      }
    );
  }

  updateChapter(formCopy: any) {
    this.courseCreationFormService.updateChapter(formCopy, this.chapterId!).subscribe(
      data => {
        this.router.navigate(['/step2/' + this.id]);
        this.toasterService.success('Chapter updated');
      },
      error => {
        this.toasterService.error(error.error.message);
      }
    );
  }

  deleteChapter(chapterId:number) {
    this.courseCreationFormService.deleteChapter(chapterId).subscribe(
      data => {
        this.toasterService.success('Chapter deleted');
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/step2/' + this.id]);
      },
      error => {
        this.toasterService.error(error.error.message);
      }
    );
  }

  deleteLesson(lessonId:number){
    this.courseCreationFormService.deleteLesson(lessonId).subscribe(
      data => {
        this.toasterService.success('Lesson deleted');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/step2/' + this.id]);
      },
      error => {
        this.toasterService.error(error.error.message);
      }
    );
  }



  protected readonly environment = environment;
}

