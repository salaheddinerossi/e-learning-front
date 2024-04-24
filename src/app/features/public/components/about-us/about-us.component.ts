import { Component } from '@angular/core';
import {environment} from "../../../../../environment";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  protected readonly environment = environment;
}
