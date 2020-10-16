import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import * as Crypto from 'crypto-js';
import {environment} from '../../environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessagesComponent} from '../resources/messages/messages.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });
    hide = true;

    getError(controlName: string): string {
        let error = '';
        const control = this.loginForm.get(controlName);
        if (control.touched && control.errors != null) {
            if (control.hasError('required')) {
                error = 'Este campo es requerido';
            }
            if (control.hasError('email')) {
                error = 'Este correo no es valido';
            }
        }
        return error;
    }

    constructor(private authenticationService: AuthenticationService,
                private router: Router,
                private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }
        const credentials = this.loginForm.value;
        this.authenticationService.login(credentials)
            .subscribe(data => {
                    localStorage.setItem('token', Crypto.AES.encrypt(data.auth_token, environment.key).toString());
                    this.authenticationService.currentTokenValue = localStorage.getItem('token');
                    this.router.navigate(['']);
                },
                error => {
                    this.snackBar.openFromComponent(MessagesComponent, {
                        data: error.error.non_field_errors,
                        horizontalPosition: 'end',
                        verticalPosition: 'top',
                        duration: 2000
                    });
                });
    }
}
