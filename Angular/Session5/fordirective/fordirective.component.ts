import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue Js','Embber Js','JSP'];


  arrobj=[
    {
      name:"Motorola",
      price:29999,
      quantity:1
    },
    {
      name:"Google",
      price:64000,
      quantity:1
    },
    {
      name:"One Plus",
      price:340000,
      quantity:1
    },
    {
      name:"Real Me",
      price:20000,
      quantity:1
    }

  ];


  constructor() { }

  ngOnInit() {
  }

}
