import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class ErroService {

  constructor(private myRoute: Router) { }

  retornoErro(erro){
    if (erro.error){
      if (erro.status == 401){
        Swal({
          title: "",
          text: erro.error,
          closeOnClickOutside: false,
          closeOnEsc: false
        }).then((result) => {
          this.myRoute.navigate(["/usuario/login"]);
        })
      } else if (erro.status == 400){
        Swal({
          title: "",
          text: erro.error,
          closeOnClickOutside: false,
          closeOnEsc: false
        }).then((result) => {
          //
        })
      } else {
        this.myRoute.navigate(["erro"]);
      }

    } else {
      Swal({
        title: '',
        text: 'Por favor, verifique sua conexão e tente novamente. Caso persista o erro, entrar em contato com o suporte.',
        closeOnClickOutside: false,
        closeOnEsc: false
      }).then((result) => {
        this.myRoute.navigate(["home"]);
      })
    }
  }


retornoErroHolerite(erro){
  if (erro.error){
    if (erro.status == 401){
      Swal({
        title: "",
        text: "Sua sessão expirou. Você será redirecionado para o Login.",
        closeOnClickOutside: false,
        closeOnEsc: false
      }).then((result) => {
        localStorage.clear();
        location.href = 'refresh';
        //this.myRoute.navigate(['/usuario/login']);
      })
    } else {
      Swal('', erro.error);
    }
  } else {
    Swal ('', 'Não foi possível realizar a ação. Algum problema ocorreu na conexão.');
  }
}

retornoErroLogin(erro){
  if (erro.error){
    if (erro.status == 401){
      Swal(erro.error, 'Verifique suas informações.');
    } else {
      Swal('', 'Não foi possível realizar a ação. Algum problema ocorreu na conexão.');
    }
  } else {
    Swal('', 'Não foi possível realizar a ação. Algum problema ocorreu na conexão.');
  }
}
}
