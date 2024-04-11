import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.css'
})
export class FormErrorsComponent {

  @Input() control?: FormControl;
  errors = [
    { key: 'required', message: 'This is a required field.' },
    { key: 'noEmptyString', message: 'Please enter a valid name.' },
    { key: 'normalEmailRule', message: 'Email format is invalid.' },
    { key: 'noWhitespaceRequired', message: 'No spaces allowed.' }
  ];

}
