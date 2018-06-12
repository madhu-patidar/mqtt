import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage, IMqttServiceOptions } from 'ngx-mqtt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { COMPANIES, DROPDOWN_SETINGS } from '../../constants/drop-down.constants';

@Component({
  selector: 'app-mqtt-communication',
  templateUrl: './mqtt-communication.component.html',
  styleUrls: ['./mqtt-communication.component.css']
})
export class MqttCommunicationComponent implements OnInit {

  mqttForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  quttData : any;
  quttData2 : any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  msg = 'neosoft|rabale|php|lock1|userinfo|@@@|text'

  private subscription: Subscription;
  public message: string;
  mqttOption: IMqttServiceOptions = {
    hostname: 'lifeguard.php-dev.in',
    port: 8888,
    path: '/'
  };
  constructor(
    private _mqttService: MqttService,
    private formBuilder: FormBuilder,
    private router: Router,
    // private mttqService: MttqService
  ){

    this.dropdownList = COMPANIES
    this.dropdownSettings = DROPDOWN_SETINGS
  }

  ngOnInit(): void {
      if(localStorage.getItem('username')){
      // throw new Error("Method not implemented.");
      this.mqttForm = this.formBuilder.group({
        userId: ['', Validators.required],
      });
    }else{
      this.router.navigate(['/login']);
    }

   
  }
  
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public publish(topic: string, message: string): void {
    this._mqttService.publish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  get f() { return this.mqttForm.controls; }

  onSubmit(formData:any) {
    let quttData;
    let msg = this.msg
    this.submitted = true;
    
    // stop here if form is invalid
    this.loading = true;
    if (this.mqttForm.invalid) {
        return;
    }

    msg = msg.replace('@@@', formData.userId);
    console.log(msg);
    this.subscription = this._mqttService.observe('device/neosoft').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      this.loading = false;
      quttData = JSON.parse(this.message);
      this.quttData = quttData.result;
      this.quttData = JSON.parse('{"' + this.quttData.replace(/~/g,'\":\"').replace(/,/g,'\",\"').replace(/^,\"|,\"$/g,"}"));

      console.log(this.message);
    });
    this.unsafePublish('web/neosoft', msg.toString());
  }
}

