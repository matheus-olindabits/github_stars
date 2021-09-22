import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { USER } from './models/user-graphql';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosRepositorios: any = [];

  constructor(private apollo: Apollo) { }
  
  buscarNomeOuRepositorio(nome: String): Observable<any>{
    return this.apollo.watchQuery<any>({
      query: USER,
    }).valueChanges;
  }
}
