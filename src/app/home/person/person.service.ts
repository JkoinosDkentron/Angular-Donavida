import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private directional: string = undefined;

    constructor(private http: HttpClient) {
    }

    findAll(direction: string, sort: string, page: number, search: string): Observable<any> {
        if (direction === 'asc') {
            this.directional = '';
        } else if (direction === 'desc') {
            this.directional = '-';
        }
        const query = '?ordering=' + this.directional + sort + '&search=' + search + '&page=' + (page + 1);
        return this.http.get<any>(environment.url + '/api/donor/' + query);
    }
}
