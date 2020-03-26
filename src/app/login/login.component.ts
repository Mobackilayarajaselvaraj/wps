import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

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
    localStorage.clear();
  }

  login(){
    this.errMsg = false;
    if(this.userName !== this.list.userName){
      this.errMsg = 'incorrect userName';
      this.timer();
    } else if(this.password !== this.list.password){
      this.errMsg = 'incorrect password';
      this.timer();
    }else{
      this._route.navigate(['./listing']);
      localStorage.setItem("Login", 'true');
    }
  }

  timer(){
    setTimeout(() => {
      this.errMsg = false;
    }, 3000);
  }

}
