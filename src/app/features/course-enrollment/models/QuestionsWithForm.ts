import {Question} from "./Question";
import {FormGroup} from "@angular/forms";

export interface QuestionsWithForm{
    questions:Question[];
    form:FormGroup;
}
