import {Component, OnInit} from '@angular/core';
import {NavbarType} from "../../../../shared/enums/navbar-type";
import {environment} from "../../../../../environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {FormOptions} from "../../models/FormOptions";
import {Subscription} from "rxjs";
import {ErrorData} from "../../../../shared/models/ErrorData";
import {AuthenticationService} from "../../../../core/services/authentication.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{


  loginForm:FormGroup;

  isPageExist:boolean=true;
  isAdmin:boolean=false;
  formOptions:FormOptions={
    title:"",
    optionLink:""
  }



  user: string | null = null;

  error:ErrorData={
    errorTitle:environment.error404.errorTitle,
    errorCode:environment.error404.errorCode,
    errorDescription:environment.error404.errorDescription
  }


  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService  , private toastrService: ToastrService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      this.user = params.get('user');
      if (this.user){
        this.handelUserFormType(this.user);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Data: ', this.loginForm.value);
      this.login();
    } else {
      this.toastrService.error("form is not valid")
      this.loginForm.markAllAsTouched();
    }
  }

  login(){
    this.authService.login(this.loginForm.value,this.user!).subscribe(
      data => {
        this.router.navigate(["/"]);
      },
        error => {
        this.toastrService.error(error.error.message)
        }
    )
  }

  handelUserFormType(user:string){
    switch (user){
      case "admin":
        this.setAdminForm();
        break;
      case "student":
        this.setStudentForm();
        break;
      case "teacher":
        this.setTeacherForm();
        break;
      default:
          this.isPageExist=false;
    }
  }

  setAdminForm(){
    this.formOptions.title=environment.loginAdmin.title;
    this.formOptions.optionLink=environment.loginAdmin.optionLink;
    this.isAdmin=true;
  }

  setStudentForm(){
    this.formOptions.title=environment.loginStudent.title;
    this.formOptions.optionLink=environment.loginStudent.optionLink;
    this.formOptions.otherOption=environment.loginStudent.otherOption;
    this.formOptions.otherOptionLink=environment.loginStudent.otherOptionLink;
  }

  setTeacherForm(){
    this.formOptions.title=environment.loginTeacher.title;
    this.formOptions.optionLink=environment.loginTeacher.optionLink;
    this.formOptions.otherOption=environment.loginTeacher.otherOption;
    this.formOptions.otherOptionLink=environment.loginTeacher.otherOptionLink;
  }


    protected readonly environment = environment;
}
