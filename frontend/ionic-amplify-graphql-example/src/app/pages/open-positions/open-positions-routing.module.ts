import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenPositionsPage } from './open-positions.page';

const routes: Routes = [
  {
    path: '',
    component: OpenPositionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenPositionsPageRoutingModule {}
