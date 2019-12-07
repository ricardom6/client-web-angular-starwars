import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { GenericModule } from '../generic/generic.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsDetailComponent } from './films-detail/films-detail.component';



@NgModule({
  declarations: [FilmsListComponent, FilmsDetailComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule, NgbModule, BrowserModule
  ],
  exports: [FilmsListComponent]
})
export class FilmsModule { }
