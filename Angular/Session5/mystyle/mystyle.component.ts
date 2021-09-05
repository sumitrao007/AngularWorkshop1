import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystyle',
  templateUrl: './mystyle.component.html',
  styleUrls: ['./mystyle.component.css']
})
export class MystyleComponent implements OnInit {

  mycolor:string='blue';
  rating:number=2;

  jsonObj={
    color:"blue",
    fontStyle:"italic",
    "font-weight":"bold"
  }

  constructor() { }

  ngOnInit() {
  }

}
