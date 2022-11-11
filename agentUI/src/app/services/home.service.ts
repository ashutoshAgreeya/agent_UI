import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url: string;

  constructor(private http: HttpClient) {

    this.url= environment.baseUrl;
   }
  public login(userDetails: any){
     return this.http.post(this.url+'/login',userDetails)
   }

   public getAllProjects() {
   
    return this.http.get(this.url + '/projectlist');
   }
}
