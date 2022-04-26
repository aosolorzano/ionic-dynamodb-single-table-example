import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesPage } from './companies.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesPageRoutingModule {}
