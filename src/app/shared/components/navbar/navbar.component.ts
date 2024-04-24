import {Component, Input, OnInit} from '@angular/core';
import {NavLink} from "../../models/nav-link";
import {NavbarType} from "../../enums/navbar-type";
import {environment} from "../../../../environment";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  links: NavLink[] = environment.publicNavLinks;
  navbarType: NavbarType = NavbarType.Public;

  navbarOpen = false;

  constructor(private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      (user: User | null) => { // Handle null values
        if (!user) {
          return;
        }
        this.switchUserRole(user.role);
      }
    );
  }

  switchUserRole(role: string) {
    switch(role) {
      case "ROLE_TEACHER":
        this.links = environment.teacherNavLinks;
        this.navbarType = NavbarType.Teacher;
        break;
      case "ROLE_STUDENT":
        this.links = environment.studentNavLinks;
        this.navbarType = NavbarType.Student;
        break;
      default:
        this.links = environment.publicNavLinks;
        this.navbarType = NavbarType.Public;
        break;
    }
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
  logout(): void {
    this.authenticationService.logout();
  this.router.navigate(['/login/student']);

  }

  protected readonly NavbarType = NavbarType;
  protected readonly environment = environment;
}
