import {Course} from "./Course";

export interface CategoryCourses{
  id:number;
  title:string;
  description:string;
  courseResponses:Course[];
}
