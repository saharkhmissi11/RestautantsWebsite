import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'class/user.class';
import {AuthService} from '../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User;
  erreur=0;
 

  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin(){
    
    let isvalidUser:Boolean=this.authService.signIn(this.user);
    if (isvalidUser) this.router.navigate(['/home']);
    else this.erreur=1;
  }

}
