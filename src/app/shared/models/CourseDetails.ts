import {ChapterCourseResponses} from "./ChapterCourseResponses";

export interface CourseDetails{
  id:number;
  image:string;
  title:string;
  about:string;
  requirements:string;
  languageEnum:string;
  courseLevelEnum:string;
  skillId:number;
  chapterCourseResponses:ChapterCourseResponses[];
  skillName:string;
}
