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
  fileControl: FormControl = new FormControl();
  selectedFile: File | null = null;

  onChange: (file: File | null) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(file: File | null): void {
    this.selectedFile = file;
    if (!file) {
      this.fileControl.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.fileControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.fileControl.disable() : this.fileControl.enable();
  }

  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.[0] ?? null;
    this.selectedFile = file;
    this.fileControl.setValue(file);
    this.onChange(file);
  }
}
