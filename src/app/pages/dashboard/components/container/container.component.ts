import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
EmployeeService

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(public employeeService: EmployeeService){}

  employeeData: any= [];
  puesto:string = "";
  available:boolean = false;

  ngOnInit(): void {

    this.employeeService.getEmployees()
    .subscribe(data => {
      this.employeeData = data;
    })
  }

}
