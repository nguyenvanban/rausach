import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../../services/sanpham.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private model: any = {};

  constructor(private sanPham: SanphamService) { }

  ngOnInit() {
  }
  
  lienHe() {
    if(this.model.lienhe == null ) {
      alert('Chưa nhập email!');
      return;
    }
    this.sanPham.lienHe(this.model.lienhe).subscribe(res =>{
      alert('Đã gửi email!');
      this.model.lienhe = "";
      this.ngOnInit();
    });
  }
}
