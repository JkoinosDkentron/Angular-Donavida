import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'configuration',
                loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
            },
            {path: 'persons', loadChildren: () => import('./person/person.module').then(m => m.PersonModule)},
        ]
    },
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
