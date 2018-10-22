import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  timer = null;
  course;
  headers = new HttpHeaders({});
  ngOnInit() {
    this.http.get('/api').subscribe((data)=>{
      console.log(data);
    });
    // this.http.get('/api/courses/3',null).subscribe((data)=>{
    //     console.log(data);
    //   });
    this.http.post('/api',{name:'peiying',pwd:'123'}).subscribe((data)=>{
      console.log(data);
    })
  }
  ngOnDestory(){
    console.log(11);
    clearInterval(this.timer);
  }
}
