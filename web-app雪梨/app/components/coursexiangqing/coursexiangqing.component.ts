import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {filter,map} from 'rxjs/operators';
@Component({
  selector: 'app-coursexiangqing',
  templateUrl: './coursexiangqing.component.html',
  styleUrls: ['./coursexiangqing.component.css']
})
export class CoursexiangqingComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  lessonId:number;
  lesson;
  ngOnInit() {
    this.lessonId = this.router.snapshot.params['lessonId'];
    this.http.get('/api/lessons/'+this.lessonId).pipe(map(data=>{ 
      return data;
    })).subscribe(data=>{
      console.log(data);
      this.lesson= data;
    })   
  }

}






















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-coursexiangqing',
//   templateUrl: './coursexiangqing.component.html',
//   styleUrls: ['./coursexiangqing.component.css']
// })
// export class CoursexiangqingComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
