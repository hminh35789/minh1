import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CountdownModule } from 'ngx-countdown';
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
import {  UserComponent} from './dangnhap/user/user.component';
import {  UserListComponent} from './dangnhap/user-list/user-list.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeService } from './shared/user.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [UserComponent,UserListComponent,
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
  imports: [NgxPaginationModule,
    FormsModule,
    CountdownModule,
    BrowserAnimationsModule,

    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
     ToastrModule.forRoot(),
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
      {path:'danhmuc/:id',component:CauhoiComponent},
      {path:'**',redirectTo:'trangchu',pathMatch:'full'}
    ])

    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
