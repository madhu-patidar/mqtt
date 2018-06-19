import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MqttModule, IMqttServiceOptions, MqttService } from 'ngx-mqtt';
import { MultiselectModule } from 'ngx-multiselect';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/multiselect.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { 
  HomeComponent, 
  MqttCommunicationComponent, 
  LoginComponent, 
  UserCreateComponent,
  OfficeCreateComponent,
  ZonesCreateComponent,
  LocksCreateComponent,
  CompanyCreateComponent,
  LayoutComponent,
} from './';

import { LayoutRoutingModule } from './common-routing.module';

import { 
  NavBarComponent,
  SideBarComponent
} from './share';

import { 
  LocalAuthService, 
  AlertService, 
  MttqService, 
  AuthGuard} from './services';
import { AlertMessageComponent } from './share';
import { BsDropdownModule } from 'ngx-bootstrap';


export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'lifeguard.php-dev.in',
  port: 8888,
  path: '/',
  protocol: 'wss',
  rejectUnauthorized: false,
  username : 'mqttuser',
  password : 'Wqebak6auH9A'
};

@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent, 
    MqttCommunicationComponent, 
    LoginComponent, 
    UserCreateComponent,
    OfficeCreateComponent,
    ZonesCreateComponent,
    LocksCreateComponent,
    CompanyCreateComponent,
  SideBarComponent,
  AlertMessageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MqttModule,
    CommonModule,
    MultiselectModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    AngularMultiSelectModule,
    LayoutRoutingModule,
    BsDropdownModule.forRoot(),
    NgbDropdownModule.forRoot(),
  ],
  providers: [
    LocalAuthService, 
    AlertService,
     MqttService, 
     MttqService,
     AuthGuard
    ],
})
export class LifeguardModule { }
