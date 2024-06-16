import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChapterCourseResponses} from "../../models/ChapterCourseResponses";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input() chapter!: ChapterCourseResponses
  @Input() isUpdate = false;
  @Input() courseId?: number;
  @Output() deleteChapterEvent = new EventEmitter<number>();
  @Output() deleteLessonEvent = new EventEmitter<number>();

  deleteChapter(chapterId: number) {
    this.deleteChapterEvent.emit(chapterId);
  }

  deleteLesson(lessonId: number) {
    this.deleteLessonEvent.emit(lessonId);
  }



}
