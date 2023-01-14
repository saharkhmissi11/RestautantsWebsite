import { Injectable } from '@angular/core';
import { User } from 'class/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[]=[];
  public loggedUser:string="";
  public isloggedIn: boolean=false;

  constructor() {
    this.users=[
      {"username":"sahar","password":"127","city":"sousse"}
    ];
   }
  listUsers() : User[]{
    return this.users;
  }
  addUser(user:User) : void {
      
    this.users.push(user);
  }
  signIn(user:User) : Boolean{
    let validUser:Boolean=false;
    this.users.forEach((curUser)=>{
      if(user.username==curUser.username && user.password==curUser.password){
        validUser=true;
        this.loggedUser=curUser.username;
        this.isloggedIn=true;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));

      }
    });
    return validUser; }
}
