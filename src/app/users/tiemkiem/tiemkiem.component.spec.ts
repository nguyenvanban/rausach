import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiemkiemComponent } from './tiemkiem.component';

describe('TiemkiemComponent', () => {
  let component: TiemkiemComponent;
  let fixture: ComponentFixture<TiemkiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiemkiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiemkiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
