import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  count:number=0;
  result:number=0;
  name:string='';
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==0){
    console.log("Event Occur!!!");
    this.count++;
    }
  }

  onSend(username){
    console.log(username);
  }
  onSend1(input){
    input.style.background="blue";
    input.style.color='white';
  }


  onAddition(num1,num2){
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }

}
