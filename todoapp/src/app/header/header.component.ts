import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  operation:String = "LogIn";
  login:boolean=true
  SignUp:boolean=false
  constructor() { }

  ngOnInit() {
  }
  SignUpState(){
    this.login=false
    this.SignUp=true
  }
  LoginState() {
    // this.operation =  (this.operation=="LogIn") ? "LogOut" : "LogIn" ;
    this.login=true
    this.SignUp=false
  }
  userinfo= {
Firstname: "",
Lastname:"",
Emailid:"",
DateofBirth:"",
Password:"",
Contact:""

  }

  


}
