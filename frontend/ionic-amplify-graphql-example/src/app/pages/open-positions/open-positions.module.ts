import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenPositionsPageRoutingModule } from './open-positions-routing.module';

import { OpenPositionsPage } from './open-positions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenPositionsPageRoutingModule
  ],
  declarations: [OpenPositionsPage]
})
export class OpenPositionsPageModule {}
