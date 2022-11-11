import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarServicioComponent } from './actualizar-servicio.component';

describe('ActualizarServicioComponent', () => {
  let component: ActualizarServicioComponent;
  let fixture: ComponentFixture<ActualizarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
