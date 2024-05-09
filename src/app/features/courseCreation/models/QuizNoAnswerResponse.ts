import {QuestionResponse} from "./QuestionResponse";

export interface QuizNoAnswerResponse{
  questionResponses:QuestionResponse[];
  type:string;
}
