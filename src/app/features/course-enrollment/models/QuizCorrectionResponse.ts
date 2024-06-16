export interface QuizCorrectionResponse{
    id:number;
    isPassed:boolean;
    mark:number;
    advices:string[];
    lessonCompleted:boolean;
    courseCompleted:boolean;
}
