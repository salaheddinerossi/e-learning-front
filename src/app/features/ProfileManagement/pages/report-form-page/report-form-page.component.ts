import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ReportService} from "../../services/report.service";

@Component({
  selector: 'app-report-form-page',
  templateUrl: './report-form-page.component.html',
  styleUrl: './report-form-page.component.css'
})
export class ReportFormPageComponent implements OnInit{

  reportForm:FormGroup;

  ngOnInit() {
  }

  constructor(private reportService:ReportService , private toastService:ToastrService,private fb:FormBuilder) {
    this.reportForm = this.fb.group({
      title:['',Validators.required],
      text:['',Validators.required]
    })
  }


  onSubmit(){
    if (this.reportForm.invalid){
      this.toastService.error("this form is not valid");
      this.reportForm.markAllAsTouched();
      return;
    }

    if (this.reportForm.valid){
      this.createReport(this.reportForm.value)
    }

  }
  createReport(form:any){

    this.reportService.createReport(form).subscribe(
        () =>{
          this.toastService.success("report has been sent")
          this.reportForm.reset();
        },error => {
          this.toastService.error(error.error)
        }
    )
  }

  protected readonly environment = environment;
}
