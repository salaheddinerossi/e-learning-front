import {MultiChoiceQuiz} from "./MultiChoiceQuiz";
import {ExplanatoryQuiz} from "./ExplanatoryQuiz";
import {TrueFalseQuiz} from "./TrueFalseQuiz";

export interface QuizzesResponse{

  multipleChoiceQuizzes?:MultiChoiceQuiz[];
  explanatoryQuizzes?:ExplanatoryQuiz[];
  trueFalseQuizzes?:TrueFalseQuiz[];

}
