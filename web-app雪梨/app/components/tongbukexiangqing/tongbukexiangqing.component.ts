import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {filter,map} from 'rxjs/operators';
@Component({
  selector: 'app-tongbukexiangqing',
  templateUrl: './tongbukexiangqing.component.html',
  styleUrls: ['./tongbukexiangqing.component.css']
})
export class TongbukexiangqingComponent implements OnInit {
  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  flag:boolean = true;
  num = 2;
  // change(d){
  //   this.num = d;
  // }
  //与上边儿的代码效果一样
  change(event){
    console.log(event);
    this.num = event.target.value;
  }
  //jsonObject = 
  date = new Date();
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).pipe(map(data=>{
     // data.name = 'hahah';
      return data;
   // })).pipe(filter(data=>{

     // return data.id ==3;
    })).subscribe(data=>{
      console.log(data);
      this.course = data;
    })   
  }
}
