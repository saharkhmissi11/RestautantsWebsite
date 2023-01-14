import { Component } from '@angular/core';
import { User } from 'class/user.class';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sarbini';
  user = new User;
  valid=0;
  erreur=0;
  
  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin(){
    
    let isvalidUser:Boolean=this.authService.signIn(this.user);
    if (isvalidUser) {this.router.navigate(['/home']) ;
     this.valid=1;
    }
    else this.erreur=1;
  }


 
  
}
