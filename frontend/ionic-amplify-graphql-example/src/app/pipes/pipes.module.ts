import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search/search.pipe';

@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe
  ]
})
export class PipesModule { }
