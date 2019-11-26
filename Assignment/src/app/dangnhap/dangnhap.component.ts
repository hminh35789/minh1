import { Component, OnInit } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';
import { DanhmucService } from '../dal/danhmuc.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
isshow:boolean=true;
kiemtra={
  ten:null,
  thongbao:null,
  pass:null
}
hocsinh:any;
student:any;
  constructor(private dn:DanhmucService) { }

  ngOnInit() {
    this.dn.getHocsinh().subscribe(dn=>{
      this.hocsinh=dn;
    })
  }
  kt(){
    for(var stu of this.hocsinh){
          if(this.kiemtra.ten===stu.username)
          {
            window.alert("thanh cong")
          }
          else {
            window.alert("that bai")
          
          }  break;
        }
        }
      }
  
  // vo(){
  //   for(var stu of this.list){
  //     if(this.kiemtra.ten===stu.username)
  //     {
  //       window.alert("thanh cong")
  //     }
  //     break;
  //   }
     
  //   }
  // }
 
  

