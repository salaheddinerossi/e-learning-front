import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private apiService:ApiService) { }

  createReport(form:any){
    return this.apiService.post(environment.services.profileManagementService,"report/",form)
  }
}
