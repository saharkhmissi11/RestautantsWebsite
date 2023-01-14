import { Component, OnInit } from '@angular/core';
import { User } from 'class/user.class';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  users: User[]=[];
  user = new User;

  constructor(private authService : AuthService) {
    this.users = authService.listUsers();
   }

  ngOnInit(): void {
  }
  addUser(){
    console.log(this.user);
    this.authService.addUser(this.user);
  }
 

}
