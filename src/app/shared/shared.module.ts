import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroFormularioComponent } from './pages/erro-formulario/erro-formulario.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    ErroFormularioComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErroFormularioComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
