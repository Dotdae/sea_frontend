import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    public employeeService: EmployeeService,
    private router: Router
    ){}


  createEmployee()
  {

    const newEmployee = {
      "name": this.name,
      "lastname": this.lastname,
      "id_Puesto": this.puesto,
      "status": "ON",
    }

    this.employeeService.postEmployee(newEmployee)
    .subscribe(data =>{

      console.log(data.id);

      if(data){

        this.router.navigateByUrl('/sucess',
        { state: {name: data.name, lastname: data.lastname, id: data.id, accessCode: data.randomCode } });

      }

    });

  }

}
