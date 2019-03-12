import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VIEW_ROUTES } from './view.routes';
import { RouterModule } from '@angular/router';
import { VolDetailsComponent } from './vol-details/vol-details.component';
import { VolDetailsGeneralComponent } from './vol-details-general/vol-details-general.component';
import { VolDetailsPassagersComponent } from './vol-details-passagers/vol-details-passagers.component';

@NgModule({
  declarations: [
    VolDetailsComponent,
    VolDetailsGeneralComponent,
    VolDetailsPassagersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(VIEW_ROUTES)
  ]
})
export class ViewModule { }
