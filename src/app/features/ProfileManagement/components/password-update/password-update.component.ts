import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Info} from "../../models/Info";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrl: './password-update.component.css'
})
export class PasswordUpdateComponent {

  @Output() submitPasswordForm:EventEmitter<FormGroup> = new EventEmitter<any>();

  passwordUpdateForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.passwordUpdateForm = this.fb.group(
        {
          oldPassword:["",Validators.required],
          newPassword:["",Validators.required],
        }
    )
  }

  onSubmit(){
    this.submitPasswordForm.emit(this.passwordUpdateForm);
  }

}
