import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  @Input() summary!:string;
  regenerateForm: FormGroup;
  @Output() regenerateSubmit:EventEmitter<FormGroup> = new EventEmitter<any>();

  onRegenerate() {
    this.regenerateSubmit.emit(this.regenerateForm);
  }
  constructor(private fb:FormBuilder) {

    this.regenerateForm = this.fb.group({
      additional_instructions: ['', Validators.required]
    });

  }


}
