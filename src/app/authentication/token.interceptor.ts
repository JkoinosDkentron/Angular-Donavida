import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as Crypto from 'crypto-js';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentToken = this.authenticationService.currentTokenValue;

        if (currentToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Token ' + Crypto.AES.decrypt(currentToken, environment.key).toString(Crypto.enc.Utf8)
                }
            });
        }
        return next.handle(req);
    }
}
