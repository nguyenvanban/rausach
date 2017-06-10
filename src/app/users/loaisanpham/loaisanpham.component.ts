import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';

@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent implements OnInit {

  private listSanPham;
  private ten;
  private maLoaiSanPham;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sanPham: SanphamService) { }

  ngOnInit() {
    // Change parmas will reload data
    this.activatedRoute.params.forEach(params =>{

    });
    this.activatedRoute.params.forEach(params => {
          this.maLoaiSanPham = params['maloaisanpham'];
          this.sanPham.getLoaiSanPham(this.maLoaiSanPham).subscribe(res => {
              this.listSanPham = res;
          });
          this.sanPham.getTenLoaiSanPham(this.maLoaiSanPham).subscribe(res => {
            this.ten = res[0].TENLOAISANPHAM;
          });
    });
    // Change parmas don't reload data
    // this.activatedRoute.params.subscribe(params => {
    //       this.maLoaiSanPham = params['maloaisanpham'];
    //     });
  }
}
