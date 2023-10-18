import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/core/socket/socket.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee[] = [];

  constructor(
    private socket: SocketService, // Socket object.
    public employeeService: EmployeeService // API object.
    ){}

  ngOnInit(): void {
    this.socket.emitEvent();
  }

  getEmployees() {

    this.employeeService.getEmployees().subscribe((data) =>{

      this.employees = data;

    })

  }

  getEmployee(id: number){

    this.employeeService.getEmployee(id).subscribe((data) =>{

      console.log(data);
      this.employee = data;

    })

  }

}
