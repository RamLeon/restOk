import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaMesaComponent } from './reserva-mesa.component';

describe('ReservaMesaComponent', () => {
  let component: ReservaMesaComponent;
  let fixture: ComponentFixture<ReservaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
