import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../../services/sanpham.service';
import { PaginationInstance } from 'ng2-pagination';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {

  private listSanPham;
  constructor(private sanPham: SanphamService) { }

  ngOnInit() {
    this.sanPham.getListSanPham().subscribe(res => {
      this.listSanPham = res;
    });
  }

  public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 15,
        currentPage: 1
  };

  public deleteSp(maSanPham) {
      this.sanPham.deleteSp(maSanPham).subscribe(res => {
          this.ngOnInit();
      });
  }

}
