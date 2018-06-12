import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MttqService } from '../../services'
import { COMPANY_NAME, ADD_USER } from './../../constants/company.constant'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  
  createForm: FormGroup; 
  constructor(
    private mttqService : MttqService
  ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      company: new FormControl('', Validators.required),
      office: new FormControl('', Validators.required),
      zone: new FormControl('', Validators.required),
      lock: new FormControl('', Validators.required),
      action: new FormControl('', Validators.required),
      userid: new FormControl('', Validators.required),
      refuserid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      isactive: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required),
    });
  }

  onSubmit(formData){
    formData.company = COMPANY_NAME;
    formData.action = ADD_USER;
    const topic = 'web/' + COMPANY_NAME;
    const msg = formData.company + '|' + formData.office + '|' + formData.zone + '|' + formData.lock + '|' + formData.action + '|' + formData.userid + '|' + formData.refuserid + '|' + formData.username + '|' + formData.isactive + '|' + formData.pin;
    console.log(msg);
    console.log(topic);

    this.mttqService.createUser(topic, msg);

  }

}
