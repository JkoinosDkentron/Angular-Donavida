import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PersonService} from './person.service';
import {MatPaginator} from '@angular/material/paginator';
import {merge, Observable} from 'rxjs';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {MatSort} from '@angular/material/sort';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements AfterViewInit {
    displayedColumns: string[] = ['identification', 'first_name', 'last_name', 'email', 'phone', 'birth_date', 'address'];
    data: string[] = [];
    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;
    searchValue = '';
    inputSearch = new FormControl();
    search: Observable<string>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    deleteSearch(): void {
        this.inputSearch.setValue('');
    }

    constructor(private personService: PersonService) {
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.search = this.inputSearch.valueChanges.pipe(
            tap(t => this.searchValue = t)
        );
        this.search.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page, this.search)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.personService.findAll(this.sort.direction, this.sort.active, this.paginator.pageIndex, this.searchValue);
                }),
                map(data => {
                    this.isLoadingResults = false;
                    this.resultsLength = data.count;
                    return data.results;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    this.isRateLimitReached = true;
                    return ([]);
                })
            ).subscribe(data => this.data = data);
    }
}
