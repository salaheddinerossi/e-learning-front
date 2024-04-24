import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Option} from "../../../models/Option";

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

  @Input() options: Option[]=[];
  @Input() placeholder: string = 'Select a value...';
  @Output() change = new EventEmitter<any>();

  public selectControl: FormControl = new FormControl();



  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectControl.setValue(value, {emitEvent: false});
    }

  }

  registerOnChange(fn: any): void {
    this.selectControl.valueChanges.subscribe(value => {
      fn(value);
      // this.change.emit(value);
      this.writeValue(value);
    });
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.selectControl.disable() : this.selectControl.enable();
  }
}
