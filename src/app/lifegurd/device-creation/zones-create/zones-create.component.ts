import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalAuthService, AlertService } from './../../services';
import { COMPANIES, OFFICES, OFFICE_DROPDOWN_SETINGS, COMPANY_DROPDOWN_SETINGS } from './../../constants/drop-down.constants';

@Component({
  selector: 'app-zones-create',
  templateUrl: './zones-create.component.html',
  styleUrls: ['./zones-create.component.css']
})
export class ZonesCreateComponent implements OnInit {

  zoneForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  companyDropdownList = [];
  companySelectedItems = [];
  officeDropdownList = [];
  officeSelectedItems = [];
  officeDropdownSettings = {};
  companyDropdownSettings = {};

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private localAuthService: LocalAuthService,
      private alertService: AlertService
    ) {
      this.companyDropdownList = COMPANIES;
      this.officeDropdownSettings = OFFICE_DROPDOWN_SETINGS;
      this.companyDropdownSettings = COMPANY_DROPDOWN_SETINGS;
      this.officeDropdownList = OFFICES;
    }

  ngOnInit() {
      if(!localStorage.getItem('username')){
          this.router.navigate(['home']);
      }
      this.zoneForm = this.formBuilder.group({
          name: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.zoneForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.zoneForm.invalid) {
          return;
      }

      this.loading = true;
      this.localAuthService.login(this.f.username.value, this.f.password.value)
      this.loading = false;

          // .subscribe(
          //     data => {
          //         this.router.navigate(['']);
          //     },
          //     error => {
          //         this.alertService.error(error);
          //         this.loading = false;
          //     });
  }

  onItemSelect(item:any){
    // console.log(item);
    // console.log(this.companySelectedItems);
  }
  OnItemDeSelect(item:any){
    //   console.log(item);
    //   console.log(this.companySelectedItems);
  }
  onSelectAll(items: any){
    //   console.log(items);
  }
  onDeSelectAll(items: any){
    //   console.log(items);
  }

}
