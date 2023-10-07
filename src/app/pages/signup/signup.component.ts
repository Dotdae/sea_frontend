import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  name : string = '';
  lastname : string = '';
  puesto : number = 0;

  constructor(public employeeService: EmployeeService ){}


  createEmployee()
  {

    const newEmployee = {
      "name": this.name,
      "lastname": this.lastname,
      "id_Puesto": this.puesto,
      "status": "ON",
    }

    console.log(newEmployee);

    this.employeeService.postEmployee(newEmployee)
    .subscribe(data => console.log(data));

  }

}
