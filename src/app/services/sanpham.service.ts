import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SanphamService {

  private urlListSanPham = 'http://localhost:3333/getsanpham';
  private urlSanPham = 'http://localhost:3333/getsanpham/masanpham/?masanpham=';
  private urlListLoaiSanPham = 'http://localhost:3333/loaiSanPham';
  private urlLoaiSanPham = 'http://localhost:3333/getsanpham/maloaisanpham/?maloaisanpham=';
  private urlTenLoaiSanPham = 'http://localhost:3333/loaiSanPham/maloaisanpham/?maloaisanpham=';
  private urlGetComment = 'http://localhost:3333/binhluan/?masanpham=';
  private urlUpComment = 'http://localhost:3333/binhluan/capnhat/';
  private urlTenSanPham = 'http://localhost:3333/getsanpham/search/?tensanpham=';
  private urlDelete = 'http://localhost:3333/setsanpham/delete/';
  private urlUpSanPham = 'http://localhost:3333/setsanpham/insert/';
  private urlEditSanPham = 'http://localhost:3333/setsanpham/update/';
  private urlImage = 'http://localhost:3333/getimages/?image=';
  private urlLienHe = 'http://localhost:3333/binhluan/lienhe/';


  constructor(private http: Http) { }

  public getListSanPham(): Observable<any> {
      return this.http.get(this.urlListSanPham).map((res: Response) => res.json());
  }

  public getSanPham(maSanPham): Observable<any> {
      return this.http.get(this.urlSanPham + maSanPham).map((res: Response) => res.json());
  }

  public getListLoaiSanPham(): Observable<any> {
      return this.http.get(this.urlListLoaiSanPham).map((res: Response) => res.json());
  }
  public getLoaiSanPham(maloaisanpham): Observable<any> {
      return this.http.get(this.urlLoaiSanPham + maloaisanpham).map((res: Response) => res.json());
  }

  public getTenLoaiSanPham(maloaisanpham): Observable<any> {
      return this.http.get(this.urlTenLoaiSanPham + maloaisanpham).map((res: Response) => res.json());
  }

  public getBinhLuan(masanpham) {
      return this.http.get(this.urlGetComment + masanpham).map((res: Response) => res.json());
  }

  public upComment(makhachhang, masanpham, nhanxet) {
    let json = JSON.stringify({ makhachhang: makhachhang, masanpham: masanpham, nhanxet: nhanxet});
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //  headers.append('Content-Type', 'x-www-form-urlencoded');
    return this.http.post(this.urlUpComment, json, {
          headers: headers
    }).map((res: Response) => res.json());
  }

  public lienHe(lienhe) {
    let json = JSON.stringify({ lienhe: lienhe});
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
      //  headers.append('Content-Type', 'x-www-form-urlencoded');
    return this.http.post(this.urlLienHe, json, {
          headers: headers
    }).map((res: Response) => res.json());
  }

   public getTenSanPham(matensanpham): Observable<any> {
      return this.http.get(this.urlTenSanPham + matensanpham).map((res: Response) => res.json());
  }

  public deleteSp(maSanPham) {
    let json = JSON.stringify({masanpham: maSanPham});
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlDelete, json, {
          headers: headers
      }).map((res: Response) => res.json());
  }

  public upSanPham(masanpham, tensanpham, loaisanpham, hinhanh, gia, soluong, nguongoc, thongtin ) {
        let json = JSON.stringify({masanpham: masanpham, tensanpham: tensanpham, maloaisanpham: loaisanpham, hinhanh: this.urlImage + hinhanh, gia: gia, soluong: soluong, 
                   nguongoc: nguongoc, thongtin: thongtin  });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //  headers.append('Content-Type', 'x-www-form-urlencoded');
        return this.http.post(this.urlUpSanPham, json, {
            headers: headers
        }).map((res: Response) => res.json());
  }
    public editSanPham(masanpham, tensanpham, loaisanpham, hinhanh, gia, soluong, nguongoc, thongtin ) {
        let json = JSON.stringify({masanpham: masanpham, tensanpham: tensanpham, maloaisanpham: loaisanpham, hinhanh: this.urlImage + hinhanh, gia: gia, soluong: soluong, 
                   nguongoc: nguongoc, thongtin: thongtin  });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //  headers.append('Content-Type', 'x-www-form-urlencoded');
        return this.http.post(this.urlEditSanPham, json, {
            headers: headers
        }).map((res: Response) => res.json());
  }

}
