import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {

  mycourse=[];

  constructor(private service:CourseService) {
  //  let obj=new CourseService();
  // this.mycourse= service.getCourse();
   }

  ngOnInit() {
    this.mycourse=this.service.getCourse();
  }


}
