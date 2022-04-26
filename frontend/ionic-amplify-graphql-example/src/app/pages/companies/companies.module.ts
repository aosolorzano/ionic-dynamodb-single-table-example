import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompaniesPageRoutingModule } from './companies-routing.module';
import { CompaniesPage } from './companies.page';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaniesPageRoutingModule,
    PipesModule
  ],
  declarations: [CompaniesPage]
})
export class CompaniesPageModule {}
