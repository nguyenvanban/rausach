import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class Guard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) { }

    canActivate() {
        let check = false;
        if (localStorage.getItem('currentUser')) {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            // this.loginService.loginAdmin(user.tendangnhap, user.matkhau).subscribe(res => {
            //     return res;
            // });
            if(user.token != null) return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/loginadmin']);
        return false;
    }
}