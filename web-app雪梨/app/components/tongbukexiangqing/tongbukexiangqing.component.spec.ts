import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbukexiangqingComponent } from './tongbukexiangqing.component';

describe('TongbukexiangqingComponent', () => {
  let component: TongbukexiangqingComponent;
  let fixture: ComponentFixture<TongbukexiangqingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbukexiangqingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbukexiangqingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
