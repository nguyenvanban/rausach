import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GioHangService {

  private urlCount = 'http://localhost:3333/giohang/dem/?makhachhang=';
  private urlSum = 'http://localhost:3333/giohang/tien/?makhachhang=';
  private urlTien = 'http://localhost:3333/giohang/makhachhang/?makhachhang=';

  private urlCapNhatGioHang = 'http://localhost:3333/giohang/capnhat/';
  private urlthem = 'http://localhost:3333/giohang/them/';
  private urlTonTai1 = 'http://localhost:3333/giohang/tontai/?makhachhang=';
  private urlTonTai2 = '&masanpham=';


  constructor(private http: Http) { }

  public getSoLuongSanPham(makhachhang): Observable<any> {
      return this.http.get(this.urlCount + makhachhang).map((res: Response) => res.json());
  }

  public getTongTien(makhachhang): Observable<any> {
      return this.http.get(this.urlSum + makhachhang).map((res: Response) => res.json());
  }

  public getTien(makhachhang): Observable<any> {
      return this.http.get(this.urlTien + makhachhang).map((res: Response) => res.json());
  }

  public capNhatGioHang(makhachhang, masanpham, thoigian, soluong) {
      let json = JSON.stringify({ makhachhang: makhachhang, masanpham: masanpham, thoigian: thoigian, soluong: soluong });
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      //  headers.append('Content-Type', 'x-www-form-urlencoded');
      return this.http.post(this.urlCapNhatGioHang, json, {
          headers: headers
      }).map((res: Response) => res.json());
  }
    public themGioHang(makhachhang, masanpham, thoigian, soluong) {
      let json = JSON.stringify({ makhachhang: makhachhang, masanpham: masanpham, thoigian: thoigian, soluong: soluong });
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      //  headers.append('Content-Type', 'x-www-form-urlencoded');
      return this.http.post(this.urlthem, json, {
          headers: headers
      }).map((res: Response) => res.json());
  }

  public tonTai(makhachhang, masanpham) {
      return this.http.get(this.urlTonTai1 + makhachhang + this.urlTonTai2 + masanpham).map((res: Response) => {
          if(res.json()[0] != null) {
              return true;
          }
          return false;
      });
  }
}
