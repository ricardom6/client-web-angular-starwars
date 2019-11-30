import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GenericModule } from '../generic/generic.module';
import { FilmsListComponent } from './films-list/films-list.component';



@NgModule({
  declarations: [FilmsListComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule
  ]
})
export class FilmsModule { }
