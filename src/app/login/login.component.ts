import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }
  login() {
    this.loginService.login(this.model.username, this.model.password).subscribe(
      result => {
        if (result === true) {
          this.router.navigate(['/home']);
        } else {
          alert( 'Tài khoản hoặc mật khẩu không đúng');
        }
      },
      error => alert(error),
    );
  }
}