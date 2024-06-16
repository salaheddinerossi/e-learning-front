import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChapterResponse} from "../../models/ChapterResponse";
import {StudentLessonStatus} from "../../enums/StudentLessonStatus";

@Component({
  selector: 'app-chapter-structure',
  templateUrl: './chapter-structure.component.html',
  styleUrl: './chapter-structure.component.css'
})
export class ChapterStructureComponent {
   @Input() chapter!:ChapterResponse;
   @Input() currentLessonId!:number;
   @Output()  passToLesson= new EventEmitter<number>();

  goToLesson(id: number) {
    this.passToLesson.emit(id);
  }

  protected readonly StudentLessonStatus = StudentLessonStatus;
}
