import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LessonService} from "../../services/lesson.service";
import {QuizzesResponse} from "../../models/quizzes/QuizzesResponse";
import {QuizService} from "../../services/quiz.service";
import {MultiChoiceQuiz} from "../../models/quizzes/MultiChoiceQuiz";
import {TrueFalseQuiz} from "../../models/quizzes/TrueFalseQuiz";
import {ExplanatoryQuiz} from "../../models/quizzes/ExplanatoryQuiz";
import {ErrorData} from "../../../../shared/models/ErrorData";

@Component({
  selector: 'app-step3-page',
  templateUrl: './step3-page.component.html',
  styleUrl: './step3-page.component.css'
})
export class Step3PageComponent implements OnInit {

  protected readonly environment = environment;
  lessonForm: FormGroup;
  chapterId!: string;
  usesAI: boolean = false;
  advices: string[] = [];
  summary?: string;
  lessonId?: number;
  updateForm: boolean = false;
  quizzes!: QuizzesResponse;
  courseId?: number;
  quizContainers: number[] = [];
  explanatoryQuiz: number[] = [];
  multipleChoiceQuiz: number[] = [];
  selectedFile: File | null = null;

  addQuizContainer() {
    this.quizContainers.push(this.quizContainers.length);
  }

  addExplanatory() {
    this.explanatoryQuiz.push(this.explanatoryQuiz.length);
  }

  addMultipleChoiceQuiz() {
    this.multipleChoiceQuiz.push(this.explanatoryQuiz.length);
  }

  isUpdate = false
  loading: boolean = true;
  hasError: boolean = false;

  error: ErrorData = {
    errorTitle: environment.notFound.lessonNotFound,
    errorDescription: environment.notFound.lessonNotFoundDescription
  }


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private toaster: ToastrService, private lessonService: LessonService, private quizService: QuizService,private router:Router) {
    this.lessonForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      chapterId: ["", Validators.required],
      material: ["",Validators.required],
      usesAI: [""]
    })

    this.lessonForm.get('material')?.valueChanges.subscribe((file: File) => {
      this.selectedFile = file;
      this.checkFileType(file);
    });

  }

  checkFileType(file: File | null): void {
    if (file && !file.type.startsWith('video/')) {
      this.lessonForm.get('material')?.setErrors({ invalidFileType: true });
      this.toaster.error('Please upload a valid video file.');
    } else {
      this.lessonForm.get('material')?.setErrors(null);
    }
  }




  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.chapterId = params['id'];

        this.getCourseId(Number(this.chapterId));
        this.lessonForm.patchValue({
          chapterId: Number(this.chapterId)
        })

        this.lessonId = params["lessonId"]
        if (this.lessonId) {
          this.isUpdate = true;
          this.updateForm = true;
          this.getCourseDetails(this.lessonId)
        }
      }
    )
  }

  onRegenerateSubmit(form: FormGroup) {
    if (form.valid) {
      this.regenerateSummary(form.value);
    } else {
      this.toaster.error("form is not valid")
    }
  }

  onSubmitAi() {
    this.lessonForm.patchValue({
      usesAI: true
    });
    this.onSubmit();
  }

  onSubmitLesson() {
    this.lessonForm.patchValue({
      usesAI: false
    });
    this.onSubmit();
  }

  onSubmit() {
    if (this.lessonForm.invalid) {
      this.toaster.error("Form is not valid");
      this.lessonForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('title', this.lessonForm.get('title')?.value);
    formData.append('description', this.lessonForm.get('description')?.value);
    formData.append('chapterId', this.lessonForm.get('chapterId')?.value);
    if (this.selectedFile) {
      formData.append('material', this.selectedFile);
    }
    formData.append('usesAI', this.lessonForm.get('usesAI')?.value);

    // Logging formData contents for debugging
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    this.createLesson(formData);
  }

  createLesson(form: any) {

    this.lessonService.createLesson(form).subscribe(
      data => {
        this.usesAI = data.data.usesAI;
        this.advices = data.data.advices;
        this.summary = data.data.summary;
        this.lessonId = data.data.id;
        this.toaster.success("lesson has been added");
        this.router.navigate(['/step3/'+this.chapterId+'/'+data.data.id])
      },
      error => {
        this.toaster.error(error.error.message)
      }
    )
  }

  regenerateSummary(form: any) {
    this.lessonService.regenerateSummary(form, this.lessonId!).subscribe(
      data => {
        this.summary = data.data.summary;
        this.toaster.success("summary has been regenerated");
      }, error => {
        this.toaster.error(error.error.message)
      }
    )
  }

  getCourseDetails(lessonId: number) {
    this.lessonService.getLessonDetails(lessonId).subscribe(
      data => {


        if (data.data) {
          this.lessonForm.patchValue({
            title: data.data.title,
            description: data.data.description,
            material: data.data.material,
            usesAI: data.data.usesAI,

          });
          this.usesAI = data.data.usesAI;
          this.advices = data.data.advices;
          this.summary = data.data.summary;
          this.lessonId = data.data.id;
          this.quizzes = data.data.quizzesResponse;

          this.loading = false;

        }
      }, error => {
        this.toaster.error(error.error.message)
        this.hasError = true;
        this.loading = false;

      }
    )
  }

  updateLesson(form: any) {
    return this.lessonService.updateCourseDetails(this.lessonId!, form).subscribe(
      () => {
        this.toaster.success("form has been updated")
      }, error => {
        this.toaster.error(error.error.message)
      }
    )
  }

  updateMultipleChoiceQuiz(form: FormGroup) {

    let formCopy = {...form.value};

    delete formCopy.quizId

    this.quizService.updateMultipleChoiceQuiz(formCopy, form.value.quizId).subscribe(
      data => {
        if (data?.data && this.quizzes?.multipleChoiceQuizzes) {
          this.quizzes.multipleChoiceQuizzes = this.quizzes.multipleChoiceQuizzes.map(quiz => {
            return quiz?.id === data.data?.id ? data.data : quiz;
          }).filter(Boolean) as MultiChoiceQuiz[];
        }

        this.toaster.success("Quiz has been updated")
      }, error => {
        this.toaster.error(error.error.message)
      }
    );
  }

  updateTrueFalseQuiz(form: FormGroup) {

    let formCopy = {...form.value};

    delete formCopy.quizId

    this.quizService.updateTrueFalseQuiz(formCopy, form.value.quizId).subscribe(
      data => {
        if (data?.data && this.quizzes?.trueFalseQuizzes) {
          this.quizzes.trueFalseQuizzes = this.quizzes.trueFalseQuizzes.map(quiz => {
            return quiz?.id === data.data?.id ? data.data : quiz;
          }).filter(Boolean) as TrueFalseQuiz[];
        }
        this.toaster.success("Quiz has been updated")
      }, error => {
        this.toaster.error(error.error.message)
      }
    );
  }

  updateExplanatoryQuiz(form: FormGroup) {

    let formCopy = {...form.value};

    delete formCopy.quizId

    this.quizService.updateExplanatoryQuiz(formCopy, form.value.quizId).subscribe(
      data => {
        if (data?.data && this.quizzes?.explanatoryQuizzes) {
          this.quizzes.explanatoryQuizzes = this.quizzes.explanatoryQuizzes.map(quiz => {
            return quiz?.id === data.data?.id ? data.data : quiz;
          }).filter(Boolean) as ExplanatoryQuiz[];
        }
        this.toaster.success("Quiz has been updated")
      }, error => {
        this.toaster.error(error.error.message)
      }
    );
  }

  createMultipleChoiceQuiz() {
    this.quizService.createMultipleChoiceQuiz(this.lessonId!).subscribe(
      data => {
        if (data?.data && this.quizzes?.multipleChoiceQuizzes) {
          this.quizzes.multipleChoiceQuizzes.push(data.data);
        }
        this.toaster.success("Quiz has been created")

      }, error => {
        this.toaster.error(error.error.message)
      }
    );
  }

  createTrueFalseQuiz() {
    this.quizService.createTrueFalseQuiz(this.lessonId!).subscribe(
      data => {
        if (data?.data && this.quizzes?.trueFalseQuizzes) {
          this.quizzes.trueFalseQuizzes.push(data.data);
        }
        this.toaster.success("Quiz has been created")
      }, error => {
        this.toaster.error(error.error.message)
      }
    );
  }

  createExplanatoryQuiz() {
    this.quizService.createExplanatoryQuiz(this.lessonId!).subscribe(
      data => {
        if (data?.data && this.quizzes?.explanatoryQuizzes) {
          this.quizzes.explanatoryQuizzes.push(data.data);
        }
        this.toaster.success("Quiz has been created")
      }, error => {
        this.toaster.error(error.error.message)
      }
    );
  }

  onFormUpdate() {
    if (this.lessonForm.invalid) {
      this.toaster.error("form is not valid")
      this.lessonForm.markAllAsTouched();
      return;
    }
    if (this.lessonForm.valid) {
      this.updateLesson(this.lessonForm.value);
    }
  }

  getCourseId(chapterId: number) {
    this.lessonService.getCourseId(chapterId).subscribe(
      data => {
        if (data.data) {
          this.courseId = data.data;
          console.log(this.courseId)
        }
      },
      error => {
        console.error('Error loading course id:', error.error);
        this.toaster.error('Failed to load course id.');
      }
    );

  }

  removeQuiz(index: number) {
    this.quizContainers.splice(index, 1);
  }

  removeExplanatoryQuiz(index: number) {
    this.explanatoryQuiz.splice(index, 1);
  }

  removeMultipleChoiceQuiz(index: number) {
    this.multipleChoiceQuiz.splice(index, 1);
  }

  createManualMultipleChoiceQuiz(form: FormGroup) {
    this.quizService.createManualMultipleChoice(this.lessonId!,form.value).subscribe(
      data => {
        if (data?.data && this.quizzes?.multipleChoiceQuizzes) {
          this.quizzes.multipleChoiceQuizzes.push(data.data);
          form.reset();
          this.multipleChoiceQuiz= [];
        }
        this.toaster.success("Quiz has been created")

      }, error => {
        this.toaster.error(error.error.message)
      }
    )
  }

  createExplanatoryManualQuiz(form: FormGroup) {
    this.quizService.createManualExplanatory( this.lessonId!,form.value).subscribe(
      data => {
        if (data?.data && this.quizzes?.explanatoryQuizzes) {
          this.quizzes.explanatoryQuizzes.push(data.data);
          form.reset();
          this.multipleChoiceQuiz = [];

        }
        this.toaster.success("Quiz has been created")
      }, error => {
        this.toaster.error(error.error.message)
      }
    )
  }

  createTrueFalseManualQuiz(form: FormGroup) {
    this.quizService.createManualTrueFalse(this.lessonId!,form.value).subscribe(
      data => {
        if (data?.data && this.quizzes?.trueFalseQuizzes) {
          this.quizzes.trueFalseQuizzes.push(data.data);
          form.reset();
          this.quizContainers = [];
        }
        this.toaster.success("Quiz has been created")
      }, error => {
        this.toaster.error(error.error.message)
      }
    )
  }



}
