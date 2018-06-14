import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, HomeComponent, MqttCommunicationComponent, UserCreateComponent } from './components';
import { CompanyCreateComponent } from 'src/app/components/device-creation/company-create/company-create.component';
import { OfficeCreateComponent } from 'src/app/components/device-creation/office-create/office-create.component';
import { ZonesCreateComponent } from './components/device-creation/zones-create/zones-create.component';
import { LocksCreateComponent } from './components/device-creation/locks-create/locks-create.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'mttq', component: MqttCommunicationComponent },
  { path: 'create/user', component: UserCreateComponent },
  { path: 'company/new', component: CompanyCreateComponent },
  { path: 'office/new', component: OfficeCreateComponent },
  { path: 'zone/new', component: ZonesCreateComponent },
  { path: 'lock/new', component: LocksCreateComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})



export class AppRoutingModule {}