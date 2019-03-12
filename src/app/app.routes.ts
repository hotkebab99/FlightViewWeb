import { Routes } from '@angular/router';
import { VolsListComponent } from './vols-list/vols-list.component';
import { VolAddComponent } from './vol-add/vol-add.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
    { path: 'list', component: VolsListComponent },
    { path: 'add', component: VolAddComponent },
    { path: 'view/:id', loadChildren: './view/view.module#ViewModule', 
                canLoad: [AuthGuard] },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
]