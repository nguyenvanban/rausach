import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { GioHangService } from '../../services/giohang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

private listLoaiSanPham;
private tenDangNhap;
private check;
private dem = 0;
private tien = 0;

private model: any = {};

 constructor(private sanPham: SanphamService, 
                private gioHang: GioHangService, private router: Router) { }

  ngOnInit() {
     this.sanPham.getListLoaiSanPham().subscribe(res => {
      this.listLoaiSanPham = res;
    });

    this.tenDangNhap = JSON.parse(localStorage.getItem('currentUser'));
    if(this.tenDangNhap != null) {
      this.check = true;
      this.gioHang.getSoLuongSanPham(this.tenDangNhap.makhachhang).subscribe(res => {
        this.dem = res[0].COUNT;
      });
      this.gioHang.getTongTien(this.tenDangNhap.makhachhang).subscribe(res => {
        this.tien = res[0].TongTien;
      });
    }      
    else this.check =false;
  }
  public goToShopCart() {
     this.router.navigate(['/giohang']);
  }

  public lamMoiGioHang() {
    this.gioHang.getSoLuongSanPham(this.tenDangNhap.makhachhang).subscribe(res => {
        this.dem = res[0].COUNT;
      });
      this.gioHang.getTongTien(this.tenDangNhap.makhachhang).subscribe(res => {
        this.tien = res[0].TongTien;
      });
  }

  public search() {
    if(this.model.soluong != null) {
      this.router.navigate(['/timkiem', this.model.soluong]);
    } else {
      alert('Hãy nhập từ khóa tìm kiếm!');
    }
    
  }

}
