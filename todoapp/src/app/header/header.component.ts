import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  operation:String = "LogIn";


  constructor() { }

  ngOnInit() {
  }
  LoginState() {
    this.operation =  (this.operation=="LogIn") ? "Logout" : "LogIn" ;
  }

}
