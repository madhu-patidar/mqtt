import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalAuthService, AlertService } from './../../services';


@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  companyForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private localAuthService: LocalAuthService,
      private alertService: AlertService
    ) {}

  ngOnInit() {
      if(!localStorage.getItem('username')){
          this.router.navigate(['home']);
      }
      this.companyForm = this.formBuilder.group({
          name: ['', Validators.required]
      });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.companyForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.companyForm.invalid) {
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
}
