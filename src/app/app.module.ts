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

  export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: 'lifeguard.php-dev.in',
    port: 8888,
    path: '/'
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
