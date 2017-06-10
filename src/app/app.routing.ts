import { Routes, RouterModule } from '@angular/router';

import { Guard } from './guards/guard';

import { ListComponent } from './users/list/list.component';
import { HomeComponent } from './users/home/home.component';
import { LoaisanphamComponent } from './users/loaisanpham/loaisanpham.component';
import { ChitietsanphamComponent } from './users/chitietsanpham/chitietsanpham.component';
import { LoginComponent } from './login/login.component';
import { GiohangComponent } from './users/giohang/giohang.component';
import { TiemkiemComponent } from './users/tiemkiem/tiemkiem.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { QuanlyComponent } from './admin/quanly/quanly.component';
import { ThemComponent } from './admin/them/them.component';
import { SuaComponent } from './admin/sua/sua.component';
import { DangkyComponent } from './dangky/dangky.component';

const appRoutes: Routes = [
    { path: 'dangki', component: DangkyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'loginadmin', component: LoginadminComponent },
    { path: 'quanly', component: QuanlyComponent, canActivate: [Guard]},
    { path: 'them', component: ThemComponent, canActivate: [Guard] },
    { path: 'sua/:masanpham', component: SuaComponent, canActivate: [Guard] },
    // , canActivate: [Guard]
    { path: 'home', component: HomeComponent},
    { path: 'loaisanpham/:maloaisanpham', component: LoaisanphamComponent},
    { path: 'chitietsanpham/:masanpham', component:  ChitietsanphamComponent},
    { path: 'giohang', component:  GiohangComponent},
    { path: 'timkiem/:tensanpham', component:  TiemkiemComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);