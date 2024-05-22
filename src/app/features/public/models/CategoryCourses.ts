import {Course} from "../../../shared/models/Course";

export interface CategoryCourses{
  id:number;
  title:string;
  description:string;
  courseResponses:Course[];
}
