import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  name:string="Sumit Raokhande";
  imgUrl:string="../../assets/bg.jpeg";
  constructor() { }

  ngOnInit() {
  }

}
