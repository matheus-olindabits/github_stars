import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro-formulario',
  templateUrl: './erro-formulario.component.html',
  styleUrls: ['./erro-formulario.component.css']
})
export class ErroFormularioComponent implements OnInit {

  @Input() mensagemErro: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
