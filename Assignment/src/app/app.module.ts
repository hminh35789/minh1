import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { MatkhauComponent } from './matkhau/matkhau.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { CauhoiComponent } from './cauhoi/cauhoi.component';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GioithieuComponent,
    TrangchuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    DangnhapComponent,
    DangkyComponent,
    MatkhauComponent,
    DoimatkhauComponent,
    DanhmucComponent,
    CauhoiComponent
  ],
  imports: [NgxPaginationModule,FormsModule,
    HttpClientModule,
    BrowserModule,RouterModule.forRoot([
      {path:'',component:TrangchuComponent},
      {path:'trangchu',component:TrangchuComponent},
      {path:'gioithieu',component:GioithieuComponent},
      {path:'gopy',component:GopyComponent},
      {path:'hoidap',component:HoidapComponent},
      {path:'lienhe',component:LienheComponent},
      {path:'dangnhap',component:DangnhapComponent},
      {path:'dangky',component:DangkyComponent},
      {path:'matkhau',component:MatkhauComponent},
      {path:'doimk',component:DoimatkhauComponent},
      {path:'danhmuc',component:DanhmucComponent},
      {path:'cauhoi/:Id',component:CauhoiComponent},
      {path:'**',redirectTo:'trangchu',pathMatch:'full'}
    ])

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
