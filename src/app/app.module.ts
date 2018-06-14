import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MqttService, IMqttMessage , MqttModule,
  IMqttServiceOptions } from 'ngx-mqtt';
import {MultiselectModule} from 'ngx-multiselect';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown'
  
import { LocalAuthService, AlertService, MttqService } from './services';
import { AppComponent } from './app.component';
import {  LocalCommonModule } from './components';
import { LoginComponent, HomeComponent, MqttCommunicationComponent, UserCreateComponent, NavBarComponent} from './components';
import { CompanyCreateComponent } from './components/device-creation/company-create/company-create.component';
import { OfficeCreateComponent } from './components/device-creation/office-create/office-create.component';
import { ZonesCreateComponent } from './components/device-creation/zones-create/zones-create.component';
import { LocksCreateComponent } from './components/device-creation/locks-create/locks-create.component';

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
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    MqttCommunicationComponent, 
    UserCreateComponent, 
    NavBarComponent,
    CompanyCreateComponent,
    OfficeCreateComponent,
    ZonesCreateComponent,
    LocksCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MqttModule,
    LocalCommonModule,
    MultiselectModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    AngularMultiSelectModule
  ],
  providers: [LocalAuthService, AlertService, MqttService, MttqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
