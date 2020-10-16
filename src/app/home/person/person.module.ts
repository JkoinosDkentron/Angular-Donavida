import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonRoutingModule} from './person-routing.module';
import {PersonComponent} from './person.component';
import {PersonService} from './person.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [PersonComponent],
    imports: [
        CommonModule,
        PersonRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        PersonService,
    ]
})
export class PersonModule {
}
