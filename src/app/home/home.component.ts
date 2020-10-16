import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    close = true;

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.authenticationService.logout();
        this.router.navigate(['login']);
    }
}
