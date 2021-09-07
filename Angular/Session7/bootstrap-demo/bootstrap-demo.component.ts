import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {


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
