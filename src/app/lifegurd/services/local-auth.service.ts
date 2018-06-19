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
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');

    this.router.navigate(['']);
  }

  login(username:string, password:string){
    if(username === 'abc' && password === '123456' ){
      localStorage.setItem('currentUser', username);
      this.router.navigate(['/lifeguard/home']);

    }else{
      this.alertService.error('Invalid username or password!...please try again later');
    }
  }

//   login(username: string, password: string) {
//     return this.http.post<any>('/api/authenticate', { username: username, password: password })
//         .map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//             }

//             return user;
//         });
// }

// logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
// }
}
