import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarUsuarioComponent } from './pages/buscar-usuario/buscar-usuario.component';
import { InputBuscaComponent } from './components/input-busca/input-busca.component';
import { ListagemBuscaComponent } from './components/listagem-busca/listagem-busca.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    BuscarUsuarioComponent,
    InputBuscaComponent,
    ListagemBuscaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsuarioModule { }
