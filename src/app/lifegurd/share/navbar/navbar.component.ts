import { Component, OnInit } from '@angular/core';
import { COMPANY_NAME } from '../../constants/company.constant';
import { LocalAuthService } from './../../services';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  companyName = COMPANY_NAME;
  pushRightClass: string = 'push-right';

  constructor(
    private localAuthService: LocalAuthService,
     public router: Router
  ) { 
    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992 &&
          this.isToggled()
      ) {
          this.toggleSidebar();
      }
  });
  }

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


  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }

  changeLang(language: string) {
      // this.translate.use(language);
  }

}
