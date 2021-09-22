import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth
import { AuthLoginGuard } from '../../core/auth/auth-login.guard';

// Componentes
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { BuscarUsuarioComponent } from './pages/buscar-usuario/buscar-usuario.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'buscar-usuario' },

  { path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard] },

  { path: 'buscar-usuario', component: BuscarUsuarioComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
