import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

   model: any = {};

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login() {
    this.loginService.loginAdmin(this.model.username, this.model.password).subscribe(
      result => {
        if (result === true) {
          this.router.navigate(['/quanly']);
        } else {
          alert( 'Tài khoản hoặc mật khẩu không đúng');
        }
      },
      error => alert(error),
    );
  }

}
