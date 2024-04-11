import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-large-button',
  templateUrl: './large-button.component.html',
  styleUrl: './large-button.component.css'
})
export class LargeButtonComponent {

  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  isDisabled = false;

  onClick(): void {
    this.buttonClick.emit();
  }


}
