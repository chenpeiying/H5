import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursexiangqingComponent } from './coursexiangqing.component';

describe('CoursexiangqingComponent', () => {
  let component: CoursexiangqingComponent;
  let fixture: ComponentFixture<CoursexiangqingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursexiangqingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursexiangqingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
