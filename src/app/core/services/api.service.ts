import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}



  get<T>(baseUrl:string, endpoint: string, params?: HttpParams | {[param: string]: string | string[]}, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(baseUrl + endpoint, { headers: headers, params })
  }

  post<T>(baseUrl:string, endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(baseUrl + endpoint, body, { headers: headers })
  }

  put<T>(baseUrl:string, endpoint: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(baseUrl + endpoint, body, { headers: headers })
  }

  patch<T>(baseUrl:string, endpoint: string, body?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(baseUrl + endpoint,  { headers: headers })
  }


  delete<T>(baseUrl:string, endpoint: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(baseUrl + endpoint, { headers: headers })
  }
}
