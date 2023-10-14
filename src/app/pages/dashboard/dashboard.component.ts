import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  constructor(public employeeService: EmployeeService){}

  employeeData: any= [];
  puesto:string = "";
  available:boolean = false;

  ngOnInit(): void {

    this.employeeService.getEmployees()
    .subscribe(data =>{

      if(data){

        this.employeeData = data;

      }

    });

  }

}
