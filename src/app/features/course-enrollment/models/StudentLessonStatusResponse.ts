import {StudentLessonStatus} from "../enums/StudentLessonStatus";

export interface StudentLessonStatusResponse{
  id:number;
  lesson_id:number;
  title:string;
  studentLessonStatus:string;
}
