import {QuizNoAnswerResponse} from "./QuizNoAnswerResponse";

export interface LessonDetails{
    id:number;
    title:string;
    description:string;
    material:string;
    usesAI:boolean;
    summary:string;
    advices:string[];
    quizNoAnswerResponses:QuizNoAnswerResponse[];
}
