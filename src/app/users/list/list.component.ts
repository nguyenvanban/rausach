import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../../services/sanpham.service';
import { PaginationInstance } from 'ng2-pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private listSanPham;
  

  constructor(private sanPham: SanphamService) { }

  ngOnInit() {
    this.sanPham.getListSanPham().subscribe(res => {
      this.listSanPham = res;
    });
  }

  public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 12,
        currentPage: 1
  };

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i < number; i++){
      items.push(i);
    }
    return items;
  }

}
