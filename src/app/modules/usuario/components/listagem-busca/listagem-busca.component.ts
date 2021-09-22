import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-listagem-busca',
  templateUrl: './listagem-busca.component.html',
  styleUrls: ['./listagem-busca.component.css']
})
export class ListagemBuscaComponent implements OnInit {

  @Input() usuarios: any;

  constructor() { }

  ngOnInit(): void {}

}
