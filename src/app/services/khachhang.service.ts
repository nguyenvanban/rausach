import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KhachHangService {

  private url = 'http://localhost:3333/getkhachhang';
  private urlDK = 'http://localhost:3333/setkhachhang/insert/';


  constructor(private http: Http) { }

  public getListKhachHang(): Observable<any> {
      return this.http.get(this.url).map((res: Response) => res.json());
  }

  public dangky(tendangnhap, matkhau, email) {
     let json = JSON.stringify({tendangnhap: tendangnhap, matkhau: matkhau, email: email});
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlDK, json, {
          headers: headers
      }).map((res: Response) => res.json());
  }

}
