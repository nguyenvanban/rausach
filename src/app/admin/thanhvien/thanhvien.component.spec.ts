import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhvienComponent } from './thanhvien.component';

describe('ThanhvienComponent', () => {
  let component: ThanhvienComponent;
  let fixture: ComponentFixture<ThanhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
