import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/pages/locations',
    pathMatch: 'full'
  },
  {
    path: 'app/pages/locations',
    loadChildren: () => import('./pages/locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'app/pages/companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'app/pages/companies/:locationId',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'app/pages/openPositions/:gsiSK',
    loadChildren: () => import('./pages/open-positions/open-positions.module').then( m => m.OpenPositionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
