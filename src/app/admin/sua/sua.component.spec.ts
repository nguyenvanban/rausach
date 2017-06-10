import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaComponent } from './sua.component';

describe('SuaComponent', () => {
  let component: SuaComponent;
  let fixture: ComponentFixture<SuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
