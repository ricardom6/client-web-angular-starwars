import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxBootstrapModule } from './modules/ngxbootstrap/ngxbootstrap.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'films',
    loadChildren: './films/films.module#FilmsModule'
  },
  {
    path :'people',
    loadChildren: './people/people.module#PeopleModule'
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgxBootstrapModule,FilmsModule, SharedModuleModule,
    RouterModule.forRoot(routes, { enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
