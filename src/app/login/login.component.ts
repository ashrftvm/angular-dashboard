import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  error: String;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  submit(){
    if(this.username === 'admin' && this.password === 'admin'){
      // console.log(this.username, this.password)
      this.router.navigate(['/dashboard']);
    }
    else{
      this.error = "Wrong Credentials";
    }
  }

  forgotPass(){
    alert("Yaay! You clicked on Forgot password.");
  }

  signUp(){
    alert("Yaay! You clicked on Sign Up.");
  }

}
