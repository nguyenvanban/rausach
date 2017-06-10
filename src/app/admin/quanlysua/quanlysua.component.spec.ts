import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlysuaComponent } from './quanlysua.component';

describe('QuanlysuaComponent', () => {
  let component: QuanlysuaComponent;
  let fixture: ComponentFixture<QuanlysuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlysuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlysuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
