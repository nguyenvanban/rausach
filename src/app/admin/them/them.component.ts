import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../../services/sanpham.service';
import { FormGroup,
         FormBuilder,
         FormControl,
         AbstractControl,
         Validators
       } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

function numberValidator(form: FormControl): {[s: string]: boolean} {
  if(!form.value.match(/^\d[0-9]+$/))
    return {numberInvalid: true};
}

@Component({
  selector: 'app-them',
  templateUrl: './them.component.html',
  styleUrls: ['./them.component.css']
})
export class ThemComponent implements OnInit {

  private tenDangNhap;

  user: any;
  myForm: FormGroup;
  masanpham: AbstractControl;
  tensanpham: AbstractControl;
  loaisanpham: AbstractControl;
  hinhanh: AbstractControl;
  gia: AbstractControl;
  soluong: AbstractControl;
  nguongoc: AbstractControl;
  thongtin: AbstractControl;

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3333/upload'});

  private listLoaiSanPham;
  constructor(private router: Router, private sanPham: SanphamService, fb: FormBuilder) { 
    this.myForm = fb.group({
        'masanpham': ['', Validators.compose([
        Validators.required])],
        'tensanpham': ['', Validators.compose([
        Validators.required])],
        'hinhanh': [''],
        'loaisanpham': ['', Validators.compose([
        Validators.required])],
        'gia': ['', Validators.compose([
        Validators.required, numberValidator])],
        'soluong': ['', Validators.compose([
        Validators.required])],
        'nguongoc': ['', Validators.compose([
        Validators.required])],
        'thongtin': ['', Validators.compose([
        Validators.required])]
      });
      this.masanpham = this.myForm.controls['masanpham'];
      this.tensanpham = this.myForm.controls['tensanpham'];
      this.hinhanh = this.myForm.controls['hinhanh'];
      this.loaisanpham = this.myForm.controls['loaisanpham'];
      this.gia = this.myForm.controls['gia'];
      this.soluong = this.myForm.controls['soluong'];
      this.nguongoc = this.myForm.controls['nguongoc'];
      this.thongtin = this.myForm.controls['thongtin'];
  }

  ngOnInit() {

     let user = JSON.parse(localStorage.getItem('currentUser'));
     this.tenDangNhap = user.tendangnhap;

     this.sanPham.getListLoaiSanPham().subscribe(res => {
      this.listLoaiSanPham = res;
    });
  }

  onSubmit(masanpham, tensanpham, loaisanpham, gia, soluong, nguongoc, thongtin): void {
    if (this.uploader.queue.length > 0) {
      let f = this.uploader.queue[this.uploader.queue.length - 1];
      f.upload();
      // insert here
      this.sanPham.upSanPham(masanpham, tensanpham, loaisanpham, f.file.name, gia, soluong, nguongoc, thongtin).subscribe(res => {
          if(res.affectedRows > 0) {
            alert('Đã thêm thành công!');
            this.router.navigate(['/quanly']);
          }else {
            alert('Mã sản phẩm đã tồn tại!');
          }
        },
        error => alert('Mã sản phẩm đã tồn tại !!!')
      );
    } 
  }

}
