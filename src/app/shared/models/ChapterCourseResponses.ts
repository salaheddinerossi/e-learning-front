import {LessonCourseResponses} from "./LessonCourseResponses";

export interface ChapterCourseResponses{
  id:number;
  title:string;
  containsChapters:boolean;
  childChapters:ChapterCourseResponses[];
  lessonCourseResponses:LessonCourseResponses[];
  isOpen?: boolean;
}
