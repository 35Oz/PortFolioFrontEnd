import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLinkActive } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://backendeze-eui7.onrender.com/api/';
  token: any;

  constructor(private htpp: HttpClient,private router: Router) { }

  login(email: string, password: string) {
    this.htpp.post(this.api + '/authenticate', {email: email,password: password} )
      .subscribe((resp:any)=>{
        this.router.navigate(['inicio']);
        localStorage.setItem('auth_token', resp.token);
      })
      
  }

  logout(){
    localStorage.removeItem('token');
  }

  public get logIn(): boolean{
    return (localStorage.getItem ('token') !== null);
  }


}