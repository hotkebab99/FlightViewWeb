import { Routes } from '@angular/router';
import { VolsListComponent } from './vols-list/vols-list.component';
import { VolDetailsComponent } from './vol-details/vol-details.component';
import { VolAddComponent } from './vol-add/vol-add.component';
import { VolDetailsGeneralComponent } from './vol-details-general/vol-details-general.component';
import { VolDetailsPassagersComponent } from './vol-details-passagers/vol-details-passagers.component';

export const appRoutes: Routes = [
    { path: 'list', component: VolsListComponent },
    { path: 'add', component: VolAddComponent },
    {
        path: 'view/:id', component: VolDetailsComponent,
        children: [
            { path: 'general', component: VolDetailsGeneralComponent },
            { path: 'passengers', component: VolDetailsPassagersComponent },
            { path: '', pathMatch: 'full', redirectTo: 'general' }
        ]
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
]