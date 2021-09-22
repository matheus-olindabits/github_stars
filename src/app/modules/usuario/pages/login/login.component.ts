import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  loading: boolean = false;
  formularioInvalido: boolean = false;

  get form() {
    return this.formularioLogin.controls;
  }

  constructor(private formBuilder: FormBuilder, private myRoute: Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  // ******** INICIALIZAÇÃO ********

  inicializarFormulario(){
    this.formularioLogin = this.formBuilder.group({
      token: ['', Validators.compose([ Validators.required ])],
    });
  }

  // ******** VALIDAÇÃO FORMULÁRIO ********

  validarFormulario(){
    if(this.formularioLogin.invalid){
      this.formularioInvalido = true;
    }else{
      this.logar();
    }
  }

  logar(){
    localStorage.setItem('token', this.form.token.value);
    this.myRoute.navigate(['/']);
  }

}
