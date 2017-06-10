import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ngx-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

import { routing }        from './app.routing';
import { Guard } from './guards/guard';

import { SanphamService } from './services/sanpham.service';
import { GioHangService } from './services/giohang.service';
import { KhachHangService } from './services/khachhang.service';
import { LoginService } from './services/login.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './users/header/header.component';
import { FooterComponent } from './users/footer/footer.component';
import { ListComponent } from './users/list/list.component';
import { SliderComponent } from './users/slider/slider.component';
import { LoaisanphamComponent } from './users/loaisanpham/loaisanpham.component';
import { ChitietsanphamComponent } from './users/chitietsanpham/chitietsanpham.component';
import { BanrauComponent } from './banrau/banrau.component';
import { HomeComponent } from './users/home/home.component';
import { LoginComponent } from './login/login.component';
import { GiohangComponent } from './users/giohang/giohang.component';
import { TiemkiemComponent } from './users/tiemkiem/tiemkiem.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { QuanlyComponent } from './admin/quanly/quanly.component';
import { ThanhvienComponent } from './admin/thanhvien/thanhvien.component';
import { SanphamComponent } from './admin/sanpham/sanpham.component';
import { ThemComponent } from './admin/them/them.component';
import { SuaComponent } from './admin/sua/sua.component';
import { QuanlysuaComponent } from './admin/quanlysua/quanlysua.component';
import { QuanlythemComponent } from './admin/quanlythem/quanlythem.component';
import { DangkyComponent } from './dangky/dangky.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SliderComponent,
    LoaisanphamComponent,
    ChitietsanphamComponent,
    BanrauComponent,
    HomeComponent,
    LoginComponent,
    GiohangComponent,
    TiemkiemComponent,
    LoginadminComponent,
    QuanlyComponent,
    ThanhvienComponent,
    SanphamComponent,
    ThemComponent,
    SuaComponent,
    FileSelectDirective, FileDropDirective, QuanlysuaComponent, QuanlythemComponent, DangkyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot(),
    Ng2PaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SanphamService, LoginService, GioHangService, KhachHangService, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
