import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {NavbarType} from "../../../../shared/enums/navbar-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit{

  selectedOption: string | number = "";


  navLinks=environment.publicNavLinks;
  navbarType=NavbarType.Public

  handleButtonClick(): void {
    console.log('Button was clicked!');
  }

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    selectedOption: new FormControl('', Validators.required),
    userText: new FormControl('', Validators.required),
    fileUpload: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm?.value);
  }


  protected readonly FormControl = FormControl;
}
