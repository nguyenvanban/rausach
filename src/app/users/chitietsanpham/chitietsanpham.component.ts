import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SanphamService } from '../../services/sanpham.service';
import { GioHangService } from '../../services/giohang.service';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent implements OnInit {

  private maSanPham;
  private tenSp;
  private soLuong;
  private gia;
  private nguonGoc;
  private hinhAnh;
  private thongTin;
  private trangthai;

  private maKhachHang;
  private tenDangNhap;

  private model: any = {};

  private listBinhLuan = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
                  private sanPham: SanphamService, private gioHang: GioHangService) { 
                  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
          this.maSanPham = params['masanpham'];
    });
    this.sanPham.getSanPham(this.maSanPham).subscribe(res => {
        this.tenSp = res[0].TENSANPHAM;
        this.soLuong = res[0].SOLUONG;
        this.gia = res[0].GIA;
        this.nguonGoc = res[0].NGUONGOC;
        this.hinhAnh = res[0].HINHANH;
        this.thongTin = res[0].THONGTIN;
        this.trangthai = res[0].TRANGTHAI;
    });

    this.sanPham.getBinhLuan(this.maSanPham).subscribe(res => {
        if(res.status != 0) this.listBinhLuan = res;
    })

    this.tenDangNhap = JSON.parse(localStorage.getItem('currentUser'));
    if(this.tenDangNhap == null) {
      return;
    }
    this.maKhachHang = this.tenDangNhap.makhachhang;
     
  }

  private update() {
        
        if(this.maKhachHang == null) {
          alert('Hãy đăng nhập để thêm sản phẩm vào giỏ hàng!');
          return;
        }

        if(this.model.soluong == null || this.model.soluong < 1 || this.model.soluong > 100) {
            alert("Số lượng không đúng!");
            return;
        }

       this.gioHang.tonTai(this.maKhachHang, this.maSanPham).subscribe(res => {
          if(res == true) {
            this.gioHang.capNhatGioHang(this.maKhachHang, this.maSanPham, "null", this.model.soluong).subscribe(respone => {
                  alert("Đã cập nhật vào giỏ hàng!");
                  window.location.reload(); 
            });
        
          } else {
            this.gioHang.themGioHang(this.maKhachHang, this.maSanPham, "null", this.model.soluong).subscribe(respone => {
               alert("Đã thêm vào giỏ hàng!");  
                window.location.reload(); 
            });
          }
      });
  }

  private updateComment() {
    if(this.maKhachHang == null) {
          alert('Hãy đăng nhập để tham gia bình luận!');
          return;
    }
    if(this.model.binhluan == null) {
      alert("Hãy nhập nội dung!");
      return;
    }
    this.sanPham.upComment(this.maKhachHang, this.maSanPham, this.model.binhluan).subscribe(res => {
      this.ngOnInit();
    });
    
        
  }
   createRange(number){
    var items: number[] = [];
    for(var i = 1; i < number; i++){
      items.push(i);
    }
    return items;
  }


}
