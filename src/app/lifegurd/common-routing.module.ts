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

import { AuthGuard } from './services';

import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
        component: LayoutComponent,
        children: [
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
        { path: '', component: LoginComponent, canActivate: [AuthGuard] },
        { path: 'mttq', component: MqttCommunicationComponent, canActivate: [AuthGuard] },
        { path: 'create/user', component: UserCreateComponent, canActivate: [AuthGuard] },
        { path: 'company/new', component: CompanyCreateComponent, canActivate: [AuthGuard] },
        { path: 'office/new', component: OfficeCreateComponent, canActivate: [AuthGuard] },
        { path: 'zone/new', component: ZonesCreateComponent, canActivate: [AuthGuard] },
        { path: 'lock/new', component: LocksCreateComponent, canActivate: [AuthGuard] },
      ]
    }
  ];



// export const routing: ModuleWithProviders = RouterModule.forChild(routes);


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}