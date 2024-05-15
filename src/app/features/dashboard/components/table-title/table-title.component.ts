import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrl: './table-title.component.css'
})
export class TableTitleComponent {

  @Input() title!: string;

}
