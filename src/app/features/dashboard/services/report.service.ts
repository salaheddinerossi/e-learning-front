import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Report} from "../../courseCreation/models/Report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private  apiService:ApiService) { }

  loadReports():Observable<ApiResponse<Report[]>>{
    return this.apiService.get(environment.services.profileManagementService,"report/reports/all")
  }

  archiveReport(reportId:number){
    return this.apiService.put(environment.services.profileManagementService,"report/"+reportId,{})
  }
}
