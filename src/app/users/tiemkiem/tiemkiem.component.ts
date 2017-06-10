import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';

@Component({
  selector: 'app-tiemkiem',
  templateUrl: './tiemkiem.component.html',
  styleUrls: ['./tiemkiem.component.css']
})
export class TiemkiemComponent implements OnInit {

  private listSanPham;
  private tenSanPham;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sanPham: SanphamService) { }

  ngOnInit() {
    // Change parmas will reload data
    this.activatedRoute.params.forEach(params => {
          this.tenSanPham = params['tensanpham'];
          this.sanPham.getTenSanPham(this.tenSanPham).subscribe(res => {
              this.listSanPham = res;
          });
    });
    // Change parmas don't reload data
    // this.activatedRoute.params.subscribe(params => {
    //       this.maLoaiSanPham = params['maloaisanpham'];
    //     });
  }
}