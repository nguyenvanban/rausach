import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlythemComponent } from './quanlythem.component';

describe('QuanlythemComponent', () => {
  let component: QuanlythemComponent;
  let fixture: ComponentFixture<QuanlythemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlythemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlythemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
