import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolsListComponent } from './vols-list/vols-list.component';
import { VolComponent } from './vol/vol.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { VolAddComponent } from './vol-add/vol-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolService } from './vol.service';

@NgModule({
  declarations: [
    AppComponent,
    VolsListComponent,
    VolComponent,
    VolAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
