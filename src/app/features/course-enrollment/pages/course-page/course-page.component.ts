import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CourseEnrollmentResponse} from "../../models/CourseEnrollmentResponse";
import {ActivatedRoute} from "@angular/router";
import {CourseEnrollmentService} from "../../services/course-enrollment.service";
import {CategoryName} from "../../../../shared/models/CategoryName";
import {CategoryService} from "../../services/category.service";
import {StudentLessonResponse} from "../../models/StudentLessonResponse";
import {ChatService} from "../../services/chat.service";
import {LessonService} from "../../services/lesson.service";
import {LessonDetails} from "../../models/LessonDetails";
import {NotesService} from "../../services/notes.service";
import {NotesComponent} from "../../components/notes/notes.component";
import {QuizCorrectionDto} from "../../models/QuizCorrectionDto";
import {QuizType} from "../../enums/QuizType";
import {AnswerDto} from "../../models/AnswerDto";
import {QuizService} from "../../services/quiz.service";
import {QuizCorrectionResponse} from "../../models/QuizCorrectionResponse";
import {QuestionsWithForm} from "../../models/QuestionsWithForm";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../../environment";
import {ErrorData} from "../../../../shared/models/ErrorData";
import {FormGroup} from "@angular/forms";
import {ReviewService} from "../../services/review.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent implements OnInit{

  courseEnrollment:CourseEnrollmentResponse={
    id:0,
    currentLessonId:0,
    chapterResponses:[],
    categoryId:0,
    categoryName:"",
    isReviewed:false,
    isCourseCompleted:false
  };
  courseId!:number;
  categoriesNames:CategoryName[]=[];
  studentLesson!:StudentLessonResponse;
  lesson:LessonDetails={
    id:0,
    title:"",
    description:"",
    material:"",
    usesAI:false,
    summary:"",
    advices:[],
    quizNoAnswerResponses:[]
  };
  lessonCompleted:boolean=false;
  courseHasBeenCompleted:boolean=false;
  passTheQuiz:boolean=false;
  private lessonId!: number;
  ReviewIsShowed=false;
  error: ErrorData = {
    errorTitle: environment.notFound.enrollmentNotFound,
    errorDescription: environment.notFound.enrollmentNotFoundDescription
  }
  isError=false;


  currentNav:string="notes"

  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @ViewChild(NotesComponent) notesComponent!: NotesComponent;

  constructor(
    private route:ActivatedRoute,
    private enrollmentService:CourseEnrollmentService,
    private categoryService:CategoryService,
    private chatService:ChatService,
    private lessonService:LessonService,
    private noteService:NotesService,
    private quizService:QuizService,
    private toasterService:ToastrService,
    private reviewService:ReviewService
  ) {

  }


  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    this.loadCourseEnrollment(this.courseId);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
    this.notesComponent.scrollToBottomNotes();
  }

  loadCourseEnrollment(courseId:number){
    this.enrollmentService.loadCourseEnrollment(courseId).subscribe(
      data => {
        if(data.data){
          this.courseEnrollment= data.data;
          this.loadCategories(this.courseEnrollment.categoryId);
          this.loadStudentLesson(this.courseEnrollment.currentLessonId);
        }
      },
    error => {
        this.isError= true;
    }
    )
  }

  loadCategories(id:number){
    this.categoryService.getCategoriesNamesBySubCategory(id).subscribe(
      data => {
        if(data.data){
          this.categoriesNames=data.data;
        }
      }
    )
  }

  loadStudentLesson(studentLessonId:number){
    this.enrollmentService.loadStudentLesson(studentLessonId).subscribe(
      data => {
        if (data.data){
          this.studentLesson = data.data;
          this.courseEnrollment.currentLessonId=studentLessonId;
          if (!this.studentLesson.isChatExist){
            this.createChat(this.studentLesson.id);
          }

          this.passTheQuiz=false;

          this.lessonId= this.studentLesson.lessonId;
          this.loadLesson(this.studentLesson.lessonId);
        }
      }
    )
  }

  changeLesson(studentLessonId:number) {
    this.loadStudentLesson(studentLessonId);
  }


  createChat(studentLessonId:number){
    this.chatService.createChat(studentLessonId).subscribe(
      data => {
        this.studentLesson.chatHistoryResponseList=[];
      }
    )
  }

  askChat(question: string, textarea: HTMLTextAreaElement) {

    if (question.trim()) {
      this.studentLesson.chatHistoryResponseList?.push({id: 0, content: question, fromAssistant: false});
      this.scrollToBottom()
      textarea.value = '';
      this.chatService.askChat(question, this.studentLesson.id).subscribe(
        data => {
          if (data.data) {
            this.studentLesson.chatHistoryResponseList?.push({id: 0, content: data.data, fromAssistant: true});
            this.scrollToBottom()
          }
        },
        error => {
          console.error("Error during chat service call:", error);
        }
      );
    }
  }
  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }


  loadLesson(lessonId:number){
    this.lessonService.loadVideo(lessonId).subscribe(
        data => {
          if(data.data){
            this.lesson = data.data;
          }
        }
    )
  }


  setNav(option: string) {
    this.currentNav=option;
  }

  addNote(input: HTMLInputElement) {
    this.notesComponent.scrollToBottomNotes()
    this.noteService.addNote(this.studentLesson.id,input.value).subscribe(
        data => {
          if(data.data){
            this.studentLesson.courseNotesResponses.push(
                data.data
            )
            this.notesComponent.scrollToBottomNotes()
          }
        }
    )
    input.value="";
  }
  correctExplanatoryQuiz(questionsWithForm:QuestionsWithForm,quizId:number){

    let answerDtos: AnswerDto[] = questionsWithForm.questions.map(question => {
      return {
        id: question.id,
        answer: question.answer,
      };
    });

    let quizCorrectionDto:QuizCorrectionDto={
      id:quizId,
      quizType:QuizType.TRUE_FALSE,
      answerDtos:answerDtos
    };

    questionsWithForm.form.reset();

    this.quizService.correctQuiz(quizCorrectionDto).subscribe(
      data => {
        if(data.data){
          let quizCorrectionResponse: QuizCorrectionResponse = data.data;
          let quizToUpdate = this.studentLesson.studentQuizResponses.find(quiz => quiz.id === quizCorrectionResponse.id);
          if (quizToUpdate) {
            quizToUpdate.isPassed = quizCorrectionResponse.isPassed;
            if (quizToUpdate.isPassed && !quizCorrectionResponse.courseCompleted){
              this.toasterService.success("You have passed the quiz successfully")
            }else {
                this.toasterService.error("You haven't succeeded")
            }

            if (quizCorrectionResponse.lessonCompleted){
              this.lessonCompleted = true;
            }

            if (quizCorrectionResponse.courseCompleted){
              this.courseHasBeenCompleted = true;
            }

            quizToUpdate.mark = quizCorrectionResponse.mark;
            quizToUpdate.advices = quizCorrectionResponse.advices;
          }
        }
      }
    )

  }




  correctTrueFalseQuiz(questionsWithForm:QuestionsWithForm,quizId:number) {


    let answerDtos: AnswerDto[] = questionsWithForm.questions.map(question => {
      let booleanAnswer:boolean;
      booleanAnswer = question.answer == "true";
        return {
            id: question.id,
            trueFalseAnswer: booleanAnswer,
        };
    });

    let quizCorrectionDto:QuizCorrectionDto={
        id:quizId,
        quizType:QuizType.TRUE_FALSE,
        answerDtos:answerDtos
    };

    questionsWithForm.form.reset();

    this.quizService.correctQuiz(quizCorrectionDto).subscribe(
        data => {
          if(data.data){
            let quizCorrectionResponse: QuizCorrectionResponse = data.data;
            let quizToUpdate = this.studentLesson.studentQuizResponses.find(quiz => quiz.id === quizCorrectionResponse.id);
            if (quizToUpdate) {
              quizToUpdate.isPassed = quizCorrectionResponse.isPassed;

              if (quizToUpdate.isPassed && !quizCorrectionResponse.courseCompleted){
                this.toasterService.success("You have passed the quiz successfully")
              }else {
                this.toasterService.error("You haven't succeeded")
              }

              if (quizCorrectionResponse.lessonCompleted){
                this.lessonCompleted = true;
              }

              if (quizCorrectionResponse.courseCompleted){
                this.courseHasBeenCompleted = true;
              }

              quizToUpdate.mark = quizCorrectionResponse.mark;
              quizToUpdate.advices = quizCorrectionResponse.advices;
            }
          }
        }
    )

  }

  setPassTheQuiz() {
    this.passTheQuiz=true;
  }

  protected readonly environment = environment;

  cancelLesson() {
    this.lessonCompleted=false;
    this.courseHasBeenCompleted=false;
  }

  completeLesson() {
    this.lessonCompleted=true;
  }

  loadNextLesson() {
    const allStudentLessons = this.courseEnrollment.chapterResponses.flatMap(chapter => chapter.studentLessonStatusResponses);

    const currentLessonIndex = allStudentLessons.findIndex(lesson => lesson.id === this.studentLesson.id);

    if (currentLessonIndex !== -1 && currentLessonIndex < allStudentLessons.length - 1) {
      const nextLessonIndex = allStudentLessons.findIndex((lesson, index) => index > currentLessonIndex);

      if (nextLessonIndex !== -1) {
        this.loadStudentLesson(allStudentLessons[nextLessonIndex].id);
      } else {
        console.log('This is the last lesson in the course.');
      }
    } else {
      console.log('This is the last lesson in the course.');
    }

    this.lessonCompleted=false;
  }

  submitReviewForm(form:FormGroup){
    this.reviewService.createReview(form.value,this.courseEnrollment.id).subscribe(
        data => {
          this.ReviewIsShowed=false;
          this.courseEnrollment.isReviewed=true;
          this.toasterService.success("Review has been submitted")
        }
    )
  }

  cancelReviewModal(){
    this.ReviewIsShowed=false;
  }

  showReviewModal(){
    this.ReviewIsShowed=true;
  }

}
