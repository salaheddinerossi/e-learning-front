import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrl: './small-button.component.css'
})
export class SmallButtonComponent {

  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  isDisabled = false;

  onClick(): void {
    this.buttonClick.emit();
  }



}
