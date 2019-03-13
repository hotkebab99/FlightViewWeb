import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { VolsListComponent } from './vols-list/vols-list.component';
import { VolComponent } from './vol/vol.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { VolAddComponent } from './vol-add/vol-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolService } from './vol.service';
import { ShowDirective } from './show.directive';
import { UlListOfDirective } from './ul-list-of.directive';
import { TestComponent } from './test/test.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    VolsListComponent,
    VolComponent,
    VolAddComponent,
    ShowDirective,
    UlListOfDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
