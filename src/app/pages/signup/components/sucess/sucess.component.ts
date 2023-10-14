import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent {

  constructor(private location: Location){}

  dataEmployee:any = [];

  name:string = '';
  lastname:string = '';
  id:string = '';
  code:string = '';


  ngOnInit(){

    this.dataEmployee.push(this.location.getState());

    this.name = this.dataEmployee[0].name
    this.lastname = this.dataEmployee[0].lastname
    this.id = this.dataEmployee[0].id
    this.code = this.dataEmployee[0].accessCode


  }


}
