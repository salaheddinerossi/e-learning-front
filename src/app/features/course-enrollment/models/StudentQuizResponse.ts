import {QuestionResponses} from "./QuestionResponses";

export interface StudentQuizResponse{
  id:number;
  quiz_id:number;
  isPassed?:boolean;
  mark?:number;
  advices:string[];
  type:string;
  questionResponsesList:QuestionResponses[];
}
