import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]

})
export class SelectInputComponent implements ControlValueAccessor {

  @Input() options: { label: string, value: number }[]=[];
  @Input() placeholder: string = 'Select a value...';

  public selectControl: FormControl = new FormControl();

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.selectControl.setValue(value, {emitEvent: false});
  }

  registerOnChange(fn: any): void {
    this.selectControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.selectControl.disable() : this.selectControl.enable();
  }
}
