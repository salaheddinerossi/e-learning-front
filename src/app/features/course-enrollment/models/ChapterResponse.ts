import {StudentLessonStatusResponse} from "./StudentLessonStatusResponse";

export interface ChapterResponse{
  id:number;
  title:string;
  containsChapters:boolean;
  chapterResponses:ChapterResponse[];
  studentLessonStatusResponses:StudentLessonStatusResponse[];
}
