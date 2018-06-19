import { NgModule, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: 'src/app/lifegurd/lifeguard.module#LifeguardModule'
  },
  {
    path: 'lifeguard',
    loadChildren: 'src/app/lifegurd/lifeguard.module#LifeguardModule'
  },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})

export class AppRoutingModule {}