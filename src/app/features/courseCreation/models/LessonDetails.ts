import {QuizWithAnswers} from "./quizzes/QuizWithAnswers";
import {QuizzesResponse} from "./quizzes/QuizzesResponse";

export interface LessonDetails{
  id:number;
  title:string;
  description:string;
  material:string;
  usesAI:boolean;
  summary:string;
  advices:string[];
  quizzesResponse:QuizzesResponse;
}
