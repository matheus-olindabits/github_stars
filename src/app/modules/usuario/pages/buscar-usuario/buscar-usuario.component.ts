import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  usuarios: any;

  constructor() { }

  ngOnInit(): void {
  }

  listarBusca(listagem: any){
    this.usuarios = listagem.data;
  }

}
