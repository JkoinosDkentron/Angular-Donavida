import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ChartsModule} from 'ng2-charts';
import {ChartbarComponent} from './chartbar/chartbar.component';
import {ChartradarComponent} from './chartradar/chartradar.component';
import {ChartcircleComponent} from './chartcircle/chartcircle.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
    declarations: [DashboardComponent, ChartbarComponent, ChartradarComponent, ChartcircleComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        ChartsModule,
        MatDialogModule,
        MatExpansionModule
    ]
})
export class DashboardModule {
}
