import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SanphamService } from '../../services/sanpham.service';
import { FormGroup,
         FormBuilder,
         FormControl,
         AbstractControl,
         Validators
       } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';


function numberValidator(form: FormControl): {[s: string]: boolean} {
  if(!form.value.match(/^\d[0-9]+$/))
    return {numberInvalid: true};
}

@Component({
  selector: 'app-sua',
  templateUrl: './sua.component.html',
  styleUrls: ['./sua.component.css']
})
export class SuaComponent implements OnInit {

  private tenDangNhap;

  myForm: FormGroup;
  tensanpham: AbstractControl;
  loaisanpham: AbstractControl;
  hinhanh: AbstractControl;
  gia: AbstractControl;
  soluong: AbstractControl;
  nguongoc: AbstractControl;
  thongtin: AbstractControl;

  private maSanPham;
  private sp;

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3333/upload'});

  private listLoaiSanPham;
  constructor(private sanPham: SanphamService, fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(params => {
          this.maSanPham = params['masanpham'];
    });

    this.myForm = fb.group({
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

    this.sanPham.getSanPham(this.maSanPham).subscribe(res => {
      this.sp = res[0];
      console.log(this.sp);
      this.tensanpham.setValue(this.sp.TENSANPHAM);
      this.loaisanpham.setValue(this.sp.MALOAISANPHAM);
      this.soluong.setValue(this.sp.SOLUONG);
      this.nguongoc.setValue(this.sp.NGUONGOC);
      this.thongtin.setValue(this.sp.THONGTIN);
      this.gia.setValue(this.sp.GIA);
    });

  }

  onSubmit(tensanpham, loaisanpham, gia, soluong, nguongoc, thongtin): void {
    if (this.uploader.queue.length > 0) {
      let f = this.uploader.queue[this.uploader.queue.length - 1];
      f.upload();
      // insert here
      this.sanPham.editSanPham(this.maSanPham, tensanpham, loaisanpham, f.file.name, gia, soluong, nguongoc, thongtin).subscribe(res => {
          if(res.affectedRows > 0) {
            alert('Đã sửa thành công!');
            this.router.navigate(['/quanly']);
          }else {
            alert('Không chỉnh sửa!');
          }
        },
        error => alert('Không chỉnh sửa!')
      );
    } 
  }

}
