import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  communityId:number;
  communitys;
  ngOnInit() {
   // console.log(this.router.snapshot.queryParams['id'])
   this.http.get('/api/communitys').subscribe((data)=>{
    this.communitys = data;
   })
  }
}
