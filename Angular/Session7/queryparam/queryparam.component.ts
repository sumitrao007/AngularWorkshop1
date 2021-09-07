import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  myjson={
    id:0,
    name:'',
    status:''
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap
    .subscribe((param)=>{
     this.myjson.id=+param.get("id");
     this.myjson.name=param.get("name");
     this.myjson.status=param.get("status");
    })

  }

}
