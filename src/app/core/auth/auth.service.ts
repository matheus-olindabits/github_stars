import { Location } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenu = new EventEmitter<boolean>();

  constructor(private myRoute: Router) { }

  verificaLogin(){
    let login: string = localStorage.getItem('login');
    let sessao: string = localStorage.getItem('sessao');
    if (sessao !== '' && sessao !== null){
      if (login === '' || login === null){
        localStorage.setItem('login','true');
      }
    }
  }

  validaSessao(){
    const sessao = localStorage.getItem('sessao');

    if (sessao){
      if (sessao == '' || sessao == null){
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

}
