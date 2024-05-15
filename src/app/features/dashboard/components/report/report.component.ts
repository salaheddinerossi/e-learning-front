import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Report} from "../../../courseCreation/models/Report";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  @Input() report!:Report;
  @Output() archiveEvent = new  EventEmitter<number>();

  onArchive(){
    this.archiveEvent.emit(this.report.id)
  }





}
