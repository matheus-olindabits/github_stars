import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioEstreladoComponent } from './repositorio-estrelado.component';

describe('RepositorioEstreladoComponent', () => {
  let component: RepositorioEstreladoComponent;
  let fixture: ComponentFixture<RepositorioEstreladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositorioEstreladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioEstreladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
