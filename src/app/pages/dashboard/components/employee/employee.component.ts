import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employeeName:string = "";
  @Input() employeePuesto:number = 0;
  @Input() employeeAvailable:string = "";

  nombrePuesto: string = "";
  available: boolean = false;

  ngOnInit(): void {

    if(this.employeePuesto === 1){
      this.nombrePuesto = "Supervisor";
    }
    else if(this.employeePuesto === 2){
      this.nombrePuesto = "Operario";
    }

    if(this.employeeAvailable === "ON"){
      this.available = true;

    }

  }

}
