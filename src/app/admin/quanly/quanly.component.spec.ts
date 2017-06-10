import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyComponent } from './quanly.component';

describe('QuanlyComponent', () => {
  let component: QuanlyComponent;
  let fixture: ComponentFixture<QuanlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
