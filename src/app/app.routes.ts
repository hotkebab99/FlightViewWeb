import { Routes } from '@angular/router';
import { VolsListComponent } from './vols-list/vols-list.component';
import { VolDetailsComponent } from './vol-details/vol-details.component';
import { VolAddComponent } from './vol-add/vol-add.component';

export const appRoutes: Routes = [
    { path: 'list', component: VolsListComponent },
    { path: 'add', component: VolAddComponent },
    { path: 'view/:id', component: VolDetailsComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
]