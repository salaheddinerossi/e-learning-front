export interface QuestionAnswers {
  id:number;
  question:string;
  options:string[]|null;
  booleanCorrectAnswer:boolean|null;
  stringCorrectAnswer:string|null;
  explanatoryAnswer:string|null;
}
