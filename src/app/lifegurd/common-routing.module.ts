import { NgModule, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  LoginComponent, 
  HomeComponent, 
  MqttCommunicationComponent, 
  UserCreateComponent,
  OfficeCreateComponent,
  CompanyCreateComponent,
  ZonesCreateComponent,
  LocksCreateComponent  
 } 
from './';

import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
        component: LayoutComponent,
        children: [
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent },
        { path: '', component: LoginComponent },
        { path: 'mttq', component: MqttCommunicationComponent },
        { path: 'create/user', component: UserCreateComponent },
        { path: 'company/new', component: CompanyCreateComponent },
        { path: 'office/new', component: OfficeCreateComponent },
        { path: 'zone/new', component: ZonesCreateComponent },
        { path: 'lock/new', component: LocksCreateComponent },
      ]
    }
  ];



// export const routing: ModuleWithProviders = RouterModule.forChild(routes);


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}