import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/usuario.service';

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

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

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
      console.log(data);
      this.usuarioService.usuariosRepositorios = data;
      this.loading = false;
      this.retornoBusca.emit();
    }).add(() => {
      this.loading = false;
    });
  }

}
