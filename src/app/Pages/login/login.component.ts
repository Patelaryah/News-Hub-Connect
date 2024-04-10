import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;
  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    const x = this.loginObj.password
    const y = this.loginObj.username
    const count = 1;
    console.log('username: %d', x);
    console.log('password: %d', y);
    console.log('password: %d', count);
    
    // this.http.post('http://127.0.0.1:8000/login', this.loginObj).subscribe((res:any)=>{
    //   debugger;
      
    //   if(res.result){
    //     alert("Login sucessfully")
    //     this.router.navigateByUrl('/dashboard')
        
    //   } else {
    //     alert(res.message)
    //   }
    // })
  }
}

export class Login{
  //grant_type: string;
  username: string;
  password: string;
  //scope: string;
  //client_id: string;
  //client_secret: string;

  constructor() {
    
    this.username = '';
    this.password = '';
    //this.grant_type = '';
    //this.scope = '';
    //this.client_id = '';
    //this.client_secret = '';
  }
}
