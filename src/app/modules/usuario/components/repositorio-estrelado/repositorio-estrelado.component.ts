import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../shared/usuario.service';

@Component({
  selector: 'app-repositorio-estrelado',
  templateUrl: './repositorio-estrelado.component.html',
  styleUrls: ['./repositorio-estrelado.component.css']
})
export class RepositorioEstreladoComponent implements OnInit {

  @Input() repositorios: any= [];
  @Input() idUsuario: String;

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  favoritarRepositorio(idRepositorio: String){
    this.usuarioService.favoritarRepositorio(this.idUsuario, idRepositorio)
    .subscribe((data) => {
      (data.data.addStar) ? this.toastr.success(`Você favoritou o repositório`, 'Sucesso!') : this.toastr.error(`Não foi possível realizar a ação`, 'Ops!');
    });
  }

}
