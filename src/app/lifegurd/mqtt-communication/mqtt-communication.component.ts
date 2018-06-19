import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage, IMqttServiceOptions } from 'ngx-mqtt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { COMPANIES, COMPANY_DROPDOWN_SETINGS } from './../constants/drop-down.constants';

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
  mqttData : any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  msg = 'neosoft|rabale|php|lock1|userinfo|@@@|text'

  private subscription: Subscription;
  public message: string;
  type = 'success';
  alertMessage = "success";
  showAlert :boolean = false;

  constructor(
    private _mqttService: MqttService,
    private formBuilder: FormBuilder,
    private router: Router,
    // private mttqService: MttqService
  ){
    this.dropdownList = COMPANIES
    this.dropdownSettings = COMPANY_DROPDOWN_SETINGS
  }

  ngOnInit(): void {
      if(localStorage.getItem('username')){
      // throw new Error("Method not implemented.");
      this.mqttForm = this.formBuilder.group({
        userId: ['', Validators.required],
      });
    }else{
      // this.router.navigate(['/lifeguard/login']);
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
    let mqttData;
    let msg = this.msg
    this.submitted = true;
    
    // stop here if form is invalid
    this.loading = true;
    if (this.mqttForm.invalid) {
        return;
    }

    msg = msg.replace('@@@', formData.userId);
    this.showAlert = false;
    this.mqttData = undefined
    this.subscription = this._mqttService.observe('device/neosoft').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();

      if(!this.message.includes('stauscode')){
        mqttData = this.message;
        this.mqttData = JSON.parse('{"' + mqttData.replace(/^,\"|,\"$/g,"}"));
      }else{
        let error = JSON.parse(this.message);
        this.type = 'danger';
        this.alertMessage = error.stausmsg;
        this.showAlert = true;

      }
    });

        //Encrypt the smg with Base64
        const key = CryptoJS.enc.Base64.parse("#base64Key#");
        const iv  = CryptoJS.enc.Base64.parse("#base64IV#");
        console.log("encrypted Base64 iv ----------------->", iv.toString())
        console.log("encrypted Base64 key ----------------->", key.toString())

            //Impementing the Key and IV and encrypt the smg
        const encrypted = CryptoJS.AES.encrypt(msg, key, {iv: iv});
        console.log("encrypted smg ----------------->", encrypted.toString())
        
    this.unsafePublish('web/neosoft', encrypted.toString());
  }
}

