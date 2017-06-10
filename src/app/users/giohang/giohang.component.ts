import { GioHangService } from '../../services/giohang.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {

  private tien = 0;
  private listGioHang;
  private tenDangNhap;
  private sum = 0;
  private maKhachHang;


  constructor(private gioHang: GioHangService) { }

  ngOnInit() {
    this.tenDangNhap = JSON.parse(localStorage.getItem('currentUser'));
    if(this.tenDangNhap == null) return;
    this.maKhachHang = this.tenDangNhap.makhachhang;
    if(this.tenDangNhap != null) {
      this.gioHang.getTien(this.tenDangNhap.makhachhang).subscribe(res => {
        this.tien = res;
      });
      this.gioHang.getTongTien(this.tenDangNhap.makhachhang).subscribe(res => {
        this.sum = res[0].TongTien;
      });
    }
  
  }



}
