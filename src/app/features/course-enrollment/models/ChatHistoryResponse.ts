import {SafeHtml} from "@angular/platform-browser";

export interface ChatHistoryResponse{
  id:number;
  content:string;
  fromAssistant:boolean;
  parsedContent: string | SafeHtml;

}
