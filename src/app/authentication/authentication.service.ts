import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentToken: string;

    constructor(private http: HttpClient) {
        this.currentTokenValue = localStorage.getItem('token');
    }

    get currentTokenValue(): string {
        return this.currentToken;
    }

    set currentTokenValue(token) {
        this.currentToken = token;
    }

    login(credentials: object): any {
        return this.http.post<{ auth_token: string }>(environment.url + '/auth/token/login/', credentials);
    }

    logout(): void {
        localStorage.removeItem('token');
        this.currentToken = null;
    }
}
