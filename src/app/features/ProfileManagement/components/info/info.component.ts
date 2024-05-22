import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Info} from "../../models/Info";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  @Input() info:Info={
    id:0,
    firstName:"",
    lastName:"",
    email:"",
  };
  @Output() submitInfoForm:EventEmitter<FormGroup> = new EventEmitter<any>();

  infoForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.infoForm = this.fb.group(
        {
          firstName:[this.info.firstName,Validators.required],
          lastName:[this.info.lastName,Validators.required],
        }
    )


  }

  ngOnInit() {
    this.infoForm = this.fb.group(
        {
          firstName:[this.info.firstName,Validators.required],
          lastName:[this.info.lastName,Validators.required],
        }
    )
  }


  onSubmit(){
    this.submitInfoForm.emit(this.infoForm);
  }

}
