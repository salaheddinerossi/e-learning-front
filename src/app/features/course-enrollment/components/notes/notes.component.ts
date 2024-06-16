import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CourseNotesResponse} from "../../models/CourseNotesResponse";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {


  @Input() notes!:CourseNotesResponse[];
  @Output() addNoteEvent=new EventEmitter<HTMLInputElement>();
  @ViewChild('notesContainer') private notesContainer!: ElementRef;

  addNote( input: HTMLInputElement) {
    this.addNoteEvent.emit(input)
  }

   scrollToBottomNotes(): void {
    try {
      this.notesContainer.nativeElement.scrollTop = this.notesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

}
