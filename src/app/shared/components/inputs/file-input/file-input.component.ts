import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})
export class FileInputComponent implements ControlValueAccessor {
  fileControl: FormControl = new FormControl();  // FormControl for the file input

  onChange: Function = (file: File | null) => {};
  onTouched: Function = () => {};

  // ControlValueAccessor interface methods
  writeValue(file: File | null): void {
    if (file) {
      this.fileControl.setValue(file, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.fileControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.fileControl.disable();
    } else {
      this.fileControl.enable();
    }
  }

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      this.fileControl.setValue(file);
    }
  }
}
