import { Component, OnInit } from '@angular/core';
import { TokenService } from './service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogged=false;
 
 constructor(private router:Router, private tokenService: TokenService){}
 ngOnInit(): void {
 if(this.tokenService.getToken()){ 
    this.isLogged=true;
    
}else{
  this.isLogged=false;
}

 }

onLogOut():void{
this.tokenService.logOut();
window.location.reload();
}
login(){
  this.router.navigate(['/login'])
  
}


  title = 'PortFolioAng';
}
