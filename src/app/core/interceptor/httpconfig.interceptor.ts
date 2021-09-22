import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErroService } from '../services/validacoes/erro.service';
import { Location } from "@angular/common";
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private ErroService: ErroService, private location: Location) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: environment.apiUrl + request.url });
        }
        request = this.validarSessao(request);

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };

                this.ErroService.retornoErro(error);

                return throwError(error);
        }));
    }

    validarSessao(request: HttpRequest<any>){

        let sessao = localStorage.getItem('sessao');

        // Apenas funciona nas rotas que estiverem com o usuário logado
        if(sessao){
            request = request.clone({ headers: request.headers.set('Authorization', sessao) });
        }

        return request;
    }

}
