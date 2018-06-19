import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalAuthService, AlertService } from './../../services';
import { COMPANIES, COMPANY_DROPDOWN_SETINGS } from './../../constants/drop-down.constants';

@Component({
  selector: 'app-office-create',
  templateUrl: './office-create.component.html',
  styleUrls: ['./office-create.component.css']
})
export class OfficeCreateComponent implements OnInit {

  officeForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  dropdownList = [];
  selectedItems = [];
  companyDropdownSettings = {};

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private localAuthService: LocalAuthService,
      private alertService: AlertService
    ) {
      this.dropdownList = COMPANIES;
      this.companyDropdownSettings = COMPANY_DROPDOWN_SETINGS;
    }

  ngOnInit() {
      if(!localStorage.getItem('username')){
          this.router.navigate(['home']);
      }
      this.officeForm = this.formBuilder.group({
          name: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.officeForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.officeForm.invalid) {
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
    //console.log(item);
    // console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      //console.log(item);
    //   console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    //   console.log(items);
  }
  onDeSelectAll(items: any){
    //   console.log(items);
  }

}
