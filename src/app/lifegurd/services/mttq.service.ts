import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage, IMqttServiceOptions } from 'ngx-mqtt';

@Injectable({
  providedIn: 'root'
})

export class MttqService {
  private subscription: Subscription;
  public message: string;

  constructor(
   private _mqttService : MqttService
  ) { }

  public createUser(topic: string, message: string): void {
    console.log("topioc",topic);
    console.log('message',message);
    
    this._mqttService.unsafePublish(topic, message.toString(), {qos: 1, retain: true});
  }

  public deleteUser(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message.toString(), {qos: 1, retain: true});
  }

  public publish(topic: string, message: string): void {
    this._mqttService.publish(topic, message, {qos: 1, retain: true});
  }

}
