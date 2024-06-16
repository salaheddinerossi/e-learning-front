import {StudentLessonStatus} from "../enums/StudentLessonStatus";
import {ChatHistoryResponse} from "./ChatHistoryResponse";
import {CourseNotesResponse} from "./CourseNotesResponse";
import {StudentQuizResponse} from "./StudentQuizResponse";

export interface StudentLessonResponse{
  id:number;
  lessonId:number;
  chatId:number;
  isChatExist:number;
  studentLessonStatus:StudentLessonStatus;
  chatHistoryResponseList?:ChatHistoryResponse[];
  courseNotesResponses:CourseNotesResponse[];
  studentQuizResponses:StudentQuizResponse[];
}
