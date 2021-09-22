import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroFormularioComponent } from './erro-formulario.component';

describe('ErroFormularioComponent', () => {
  let component: ErroFormularioComponent;
  let fixture: ComponentFixture<ErroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
