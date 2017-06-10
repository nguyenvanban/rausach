import { Component, OnInit } from '@angular/core';
import { KhachHangService } from '../../services/khachhang.service';

@Component({
  selector: 'app-thanhvien',
  templateUrl: './thanhvien.component.html',
  styleUrls: ['./thanhvien.component.css']
})
export class ThanhvienComponent implements OnInit {

  private listKhachHang;

  constructor(private khachHang: KhachHangService) { }

  ngOnInit() {
    this.khachHang.getListKhachHang().subscribe(res => {
      this.listKhachHang = res
    });
  }

}
