import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any[]=[];

  id:number;
  title:string='';
  body:string='';
  ishidden:boolean=true;


  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }
   GetAllPost(){

    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.post=(<any>response);
    },(error)=>{
      alert("Server Problem");
    })

   }

   onSubmit(mytitle,mybody){
    let jsonobj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(jsonobj)
    .subscribe((response)=>{
      console.log(response);
    })


   }

   onEdit(item){
      console.log(item);
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.ishidden=false;
   }

   onUpdate(){
      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.Updatedata(obj)
      .subscribe((response)=>{
        console.log(response);
      })

   }

   onDelete(id:number){
     this.service.DeleteData(id)
     .subscribe((response)=>{
       console.log(response);
     })
   }

}
