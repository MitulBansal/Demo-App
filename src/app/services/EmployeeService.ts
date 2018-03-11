import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../module/Employee';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  getEmployeeDetails() {
    return this.http.get('/assets/resources/data/Employee_Details.json')
      .toPromise()
      .then(res => <Employee[]>res.json().data)
      .then(data => { return data; });
  }
}

