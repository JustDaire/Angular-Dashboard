import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private http: HttpClient
  ) { }

  getNeos(optionalParams: string) {
    // return this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?${optionalParams}`);
    return this.http.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?${optionalParams}`);
  }

  getUsers(optionalParams: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users?${optionalParams}`);
  }

  getUsersAlt(optionalParams: string) {
    return this.http.get(`https://reqres.in/api/users?page=2${optionalParams}`);
  }
}
