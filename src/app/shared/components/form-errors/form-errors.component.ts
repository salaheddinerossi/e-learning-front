import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.css'
})
export class FormErrorsComponent {

  @Input() control!: AbstractControl;

  errorMessages = [
    { type: 'required', message: 'This field is required.' },
    { type: 'email', message: 'Please enter a valid email address.' },
    { type: 'minLength', message: 'Minimum length required is.' },
    { type: 'maxLength', message: 'Maximum allowed length is.' },
    { type: 'pattern', message: 'Invalid format.' },
    { type: 'min', message: 'Minimum value allowed is.' },
    { type: 'max', message: 'Maximum value allowed is.' }
  ];


}
