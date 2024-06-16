import {ChapterResponse} from "./ChapterResponse";

export interface CourseEnrollmentResponse{

  id:number;
  currentLessonId:number;
  categoryId:number;
  chapterResponses:ChapterResponse[];
  categoryName:string;
  isReviewed:boolean;
  isCourseCompleted:boolean
}
