import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  lessonId:number;
  lessons;
  ngOnInit() {
    this.http.get('/api/lessons').subscribe((data)=>{
      this.lessons= data;
  })
  }
}
