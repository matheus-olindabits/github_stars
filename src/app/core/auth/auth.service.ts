import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenu = new EventEmitter<boolean>();

  constructor() { }

  validaSessao(){
    const token = localStorage.getItem('token');

    if (token){
      if (token == '' || token == null){
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

}
