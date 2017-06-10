import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanrauComponent } from './banrau.component';

describe('BanrauComponent', () => {
  let component: BanrauComponent;
  let fixture: ComponentFixture<BanrauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanrauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
