import { Component, OnInit } from '@angular/core';
import { LocalAuthService } from 'src/app/services';
import { COMPANY_NAME } from 'src/app/constants/company.constant';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  companyName = COMPANY_NAME;
  constructor(private localAuthService: LocalAuthService) { }

  ngOnInit() {
    
  }

  logout(){
    this.localAuthService.logout()
  }

  isLogedIn(){
    if(localStorage.getItem('username')){
      return true
    }else{
      return false
    }
  }

}
