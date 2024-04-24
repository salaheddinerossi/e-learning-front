import { Component } from '@angular/core';
import {environment} from "../../../../../environment";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  heroTitle=environment.heroTitle;


  protected readonly environment = environment;
}
