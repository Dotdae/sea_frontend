import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient) { }

  // GET method.

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('api/employees');
  }


  // GET by ID.

  public getEmployee(id: number): Observable<Employee[]>{

    return this.http.get<Employee[]>(`api/employees/${id}`);

  }


  // POST method.

  public postEmployee(employee: any): Observable<any>{

    return this.http.post('api/employees', employee);
  }

}
