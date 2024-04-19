import { Component } from '@angular/core';
import {environment} from "../../../../../environment";
import {NavbarType} from "../../../../shared/enums/navbar-type";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  navLinks=environment.publicNavLinks;
  navbarType=NavbarType.Public


}
