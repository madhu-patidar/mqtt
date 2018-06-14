import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent, MqttCommunicationComponent, LoginComponent, UserCreateComponent } from '.';
import { CompanyCreateComponent } from './device-creation/company-create/company-create.component';
import { OfficeCreateComponent } from './device-creation/office-create/office-create.component';
import { ZonesCreateComponent } from './device-creation/zones-create/zones-create.component';
import { LocksCreateComponent } from './device-creation/locks-create/locks-create.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    // HomeComponent,
    // MqttCommunicationComponent,
    // LoginComponent,
    // UserCreateComponent,
    // CompanyCreateComponent,
    // OfficeCreateComponent,
    // ZonesCreateComponent,
    // LocksCreateComponent
  ],
})
export class LocalCommonModule { }
