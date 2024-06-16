import {QuizType} from "../enums/QuizType";
import {AnswerDto} from "./AnswerDto";

export interface QuizCorrectionDto{
  id:number;
  quizType:QuizType;
  answerDtos:AnswerDto[];
}
