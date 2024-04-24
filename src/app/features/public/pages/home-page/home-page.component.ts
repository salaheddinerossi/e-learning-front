import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {NavbarType} from "../../../../shared/enums/navbar-type";
import {AuthenticationService} from "../../../../core/services/authentication.service";
import {User} from "../../../../shared/models/User";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private authenticationService:AuthenticationService) {
  }




}
