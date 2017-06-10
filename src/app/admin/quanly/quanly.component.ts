import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quanly',
  templateUrl: './quanly.component.html',
  styleUrls: ['./quanly.component.css']
})
export class QuanlyComponent implements OnInit {

  private checkUser = false;
  private checkPruduct = true;
  private tenDangNhap;

  constructor() { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.tenDangNhap = user.tendangnhap;
  }

  public changeCheckUser() {
      this.checkPruduct = false;
      this.checkUser = true;
  }

  public changeCheckProduct() {
      this.checkPruduct = true;
      this.checkUser = false;
  }

}
