import {Component, Input} from '@angular/core';
import {ChapterCourseResponses} from "../../models/ChapterCourseResponses";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input() chapter!: ChapterCourseResponses;

  toggleChapter(chapter: ChapterCourseResponses) {
    chapter.isOpen = !chapter.isOpen;
  }



}
