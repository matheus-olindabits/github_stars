import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { userQuery, starQuery } from './models/user-graphql';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosRepositorios: any = [];

  constructor(private apollo: Apollo) { }
  
  buscarNomeOuRepositorio(nome: String): Observable<any>{
    return this.apollo.watchQuery<any>({
      query: userQuery(nome),
      errorPolicy: 'all'
    }).valueChanges;
  }

  favoritarRepositorio(idusuario: String, idRepositorio: String): Observable<any>{
    return this.apollo.mutate<any>({
      mutation: starQuery(idusuario, idRepositorio),
      errorPolicy: 'all'
    });
  }

}
