import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ResignationComponent;
  let fixture: ComponentFixture<ResignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
