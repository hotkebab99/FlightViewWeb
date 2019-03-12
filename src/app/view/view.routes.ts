import { Routes } from '@angular/router';
import { VolDetailsGeneralComponent } from './vol-details-general/vol-details-general.component';
import { VolDetailsPassagersComponent } from './vol-details-passagers/vol-details-passagers.component';
import { VolDetailsComponent } from './vol-details/vol-details.component';

export const VIEW_ROUTES: Routes = [
    {
        path: '', component: VolDetailsComponent,
        children: [
            { path: 'general', component: VolDetailsGeneralComponent },
            { path: 'passengers', component: VolDetailsPassagersComponent },
            { path: '', pathMatch: 'full', redirectTo: 'general' }
        ]
    }
];