import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule, FilmsModule, PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
