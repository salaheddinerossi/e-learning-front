import {Component, Input} from '@angular/core';
import {NavLink} from "../../models/nav-link";
import {NavbarType} from "../../enums/navbar-type";
import {environment} from "../../../../environment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() links:NavLink[]=[];
  @Input() navbarType:NavbarType=NavbarType.Public;

  navbarOpen = false;

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }


  protected readonly NavbarType = NavbarType;
  protected readonly environment = environment;
}
