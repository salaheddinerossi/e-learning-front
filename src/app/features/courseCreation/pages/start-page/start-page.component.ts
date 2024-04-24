import { Component } from '@angular/core';
import {environment} from "../../../../../environment";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {

  protected readonly environment = environment;
}
