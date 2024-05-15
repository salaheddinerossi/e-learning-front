import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {Report} from "../../../courseCreation/models/Report";
import {ReportService} from "../../services/report.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.css'
})
export class ReportsPageComponent implements OnInit{


    allReports:Report[]=[];

    constructor(private reportService:ReportService,private toastService:ToastrService) {
    }

    ngOnInit() {
        this.loadReports()
    }



    archiveReport(id:number){
        this.reportService.archiveReport(id).subscribe(
            () => {
                this.allReports = this.allReports.map(
                    report => {
                        if (report.id == id && report ){
                            report.isArchived=true;
                        }
                        return report;
                    }

                )
                this.toastService.success("report has been archived");
            },error => {
                this.toastService.error(error.error)
            }
        )
    }

    loadReports(){
        this.reportService.loadReports().subscribe(
            data => {
                if (data.data){
                    this.allReports= data.data;
                    console.log(this.allReports)
                }
            }
        )
    }


    protected readonly environment = environment;
}
