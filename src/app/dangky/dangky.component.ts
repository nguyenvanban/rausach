import { Component, OnInit } from '@angular/core';
import { KhachHangService } from '../services/khachhang.service';
import { FormGroup,
         FormBuilder,
         FormControl,
         AbstractControl,
         Validators
       } from '@angular/forms';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

  myForm: FormGroup;
  tendangnhap: AbstractControl;
  matkhau: AbstractControl;
  email: AbstractControl;

  constructor(fb: FormBuilder,private khachHangService: KhachHangService) { 
     this.myForm = fb.group({
        'tendangnhap': ['', Validators.compose([
        Validators.required])],
        'matkhau': ['', Validators.compose([
        Validators.required])],
        'email': ['', Validators.compose([
        Validators.required])]
      });
      this.tendangnhap = this.myForm.controls['tendangnhap'];
      this.matkhau = this.myForm.controls['matkhau'];
      this.email = this.myForm.controls['email'];
  }

  ngOnInit() {
  }

  onSubmit(tendangnhap, matkhau, email): void {
      this.khachHangService.dangky(tendangnhap, matkhau, email).subscribe(res => {
          if(res.affectedRows > 0) {
            alert('Đã đăng ký thành công!');
          }else {
            alert('Đăng ký thất bại!');
          }
        },
        error => alert('Đăng ký thất bại !!!')
      );
  }

}
