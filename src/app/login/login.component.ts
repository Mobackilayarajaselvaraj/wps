import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router) { }

  userName:string;
  password:string;
  errMsg:any;

  list={
    userName:'Moback',
    password:'Moback123'
  }

  ngOnInit() {
  }

  login(){
    this.errMsg = false;
    if(this.userName !== this.list.userName){
      this.errMsg = 'incorrect userName';
    } else if(this.password !== this.list.password){
      this.errMsg = 'incorrect password';
    }else{
      this._route.navigate(['./listing']);
    }
  }

}
