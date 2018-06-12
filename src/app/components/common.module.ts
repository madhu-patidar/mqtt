import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent, MqttCommunicationComponent, LoginComponent, UserCreateComponent } from '.';

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
  ],
})
export class LocalCommonModule { }
