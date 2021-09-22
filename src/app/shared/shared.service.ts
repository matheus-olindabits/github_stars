import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arquivo } from './model/retornoArquivo';
import { HttpClient } from '@angular/common/http';
import { ViaCep } from './model/viaCep';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  retornoArquivo: string;

}
