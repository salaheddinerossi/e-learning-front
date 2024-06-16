import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title!:string;
  @Input() text!:string;
  @Input() submitButton!:string;
  @Input() isCourseCompletion=false;
  @Output() cancel= new EventEmitter<any>();
  @Output() goNextLesson = new EventEmitter<any> ();
  cancelModal(){
    this.cancel.emit();
  }

  nextLesson(){
    this.goNextLesson.emit();
  }

}
