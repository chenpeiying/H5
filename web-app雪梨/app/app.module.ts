import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { CommonService } from './services/common.service';
import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { TongbukexiangqingComponent } from './components/tongbukexiangqing/tongbukexiangqing.component';
import { APipe } from './a.pipe';
import { CoursexiangqingComponent } from './components/coursexiangqing/coursexiangqing.component';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    InputComponent,
    ListComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbukexiangqingComponent,
    APipe,
    CoursexiangqingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[//子路由
        {path:'todo',component:TodolistComponent},
        {path:'parent',component:ParentComponent},
        {path:'',redirectTo:'todo',pathMatch:'full'},//子路由的重定向，跳转到首页组件时默认todolist组件显示
      ]},
      {path:'tongbu/:courseId',component:TongbukexiangqingComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:lessonId',component:CoursexiangqingComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent},
    ]),
    HttpClientModule,
  ],
  providers: [{provide:CommonService,useClass:CommonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
