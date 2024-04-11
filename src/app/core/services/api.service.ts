import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {appConfig} from '../../config'

@Injectable()
export class ApiService {
  private readonly baseUrl = appConfig.baseUrl;

  constructor(private http: HttpClient) {}



  get<T>(endpoint: string, params?: HttpParams | {[param: string]: string | string[]}, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint, { headers: headers, params })
  }

  post<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.baseUrl + endpoint, body, { headers: headers })
  }

  put<T>(endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(this.baseUrl + endpoint, body, { headers: headers })
  }

  patch<T>(endpoint: string, body?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(this.baseUrl + endpoint,  { headers: headers })
  }


  delete<T>(endpoint: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(this.baseUrl + endpoint, { headers: headers })
  }
}
