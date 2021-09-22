import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBuscaComponent } from './listagem-busca.component';

describe('ListagemBuscaComponent', () => {
  let component: ListagemBuscaComponent;
  let fixture: ComponentFixture<ListagemBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
