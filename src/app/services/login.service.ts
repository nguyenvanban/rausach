import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
    public token: string;
    public data: string;

    private urlLogin = 'http://localhost:3333/login';
    private urlLoginAdmin = 'http://localhost:3333/login/admin';

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    logout(): void {
    // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    login(username, password) {
        let json = JSON.stringify({ tendangnhap: username, matkhau: password })
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //  headers.append('Content-Type', 'x-www-form-urlencoded');
        return this.http.post(this.urlLogin, json, {
            headers: headers
        }).map((response) => {
            let tendangnhap = response.json() && response.json().tendangnhap;
            let makhachhang = response.json() && response.json().makhachhang;
            this.data = JSON.stringify(response.json().tendangnhap);
            if (tendangnhap != "-1") {
                localStorage.setItem('currentUser', JSON.stringify({ tendangnhap: tendangnhap, makhachhang: makhachhang }));
                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
    }
    
    loginAdmin(username, password) {
        let json = JSON.stringify({ tendangnhap: username, matkhau: password })
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //  headers.append('Content-Type', 'x-www-form-urlencoded');
        return this.http.post(this.urlLoginAdmin, json, {
            headers: headers
        }).map((response) => {
            let token = response.json() && response.json().token;
            this.data = JSON.stringify(response.json().tendangnhap);
            if (token) {
                // set token property
                this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ tendangnhap: username, matkhau: password, token: token }));
                

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
    }

}