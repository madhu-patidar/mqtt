import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {

  constructor(
        private router: Router,
        private alertService : AlertService
  ) { }

  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }

  login(username:string, password:string){
    if(username === 'abc' && password === '123456' ){
      localStorage.setItem('username', username);
      this.router.navigate(['/home']);

    }else{
      this.alertService.error('Invalid username or password!...please try again later');
    }
  }
}
