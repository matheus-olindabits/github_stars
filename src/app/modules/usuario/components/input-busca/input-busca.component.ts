import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.css']
})
export class InputBuscaComponent implements OnInit {

  @Output() retornoBusca: EventEmitter<any> = new EventEmitter();


  formularioBusca: FormGroup;
  loading: boolean = false;
  formularioInvalido: boolean = false;

  get form() {
    return this.formularioBusca.controls;
  }

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  // ******** INICIALIZAÇÃO ********

  inicializarFormulario(){
    this.formularioBusca = this.formBuilder.group({
      busca: ['', Validators.compose([ Validators.required ])],
    });
  }

  // ******** VALIDAÇÃO FORMULÁRIO ********

  validarFormulario(){
    if(this.formularioBusca.invalid){
      this.formularioInvalido = true;
    }else{
      this.realizarBusca();
    }
  }

  realizarBusca(){
    this.loading = true;
    this.usuarioService.buscarNomeOuRepositorio(this.form.busca.value)
    .subscribe((data) => {
      if(data.data.user){
        this.retornoBusca.emit(data);
      }else{
        this.toastr.error(`Usuário não encontrado`, 'Ops!')
      }
      this.loading = false;
    });
  }

}
