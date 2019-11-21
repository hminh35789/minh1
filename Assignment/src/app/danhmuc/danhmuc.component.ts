import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanhmucService } from '../dal/danhmuc.service';
import {NgxPaginationModule} from 'ngx-pagination'

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent implements OnInit {
danhmuc:any;
sotrang = 4;
trangthu = 1;
page:number;

// totalPage() {
//   if (this.list.length % this.itemperpage === 0) {
//     this.page = this.list.length % this.itemperpage
//   }

//   else {
//     this.page = (this.list.length % this.itemperpage) + 1;
//   }
// }

next() {
if (this.trangthu * this.sotrang < this.danhmuc.length) {
  this.trangthu++;
}
}

pre() {
if (this.trangthu != 0) {
  this.trangthu--;
}
}

first() {
this.trangthu = 1;
}

last() {
this.trangthu = this.page;
}

product:any;
  constructor(private rout:ActivatedRoute, private dm:DanhmucService,private pa:NgxPaginationModule) { }
url='./assets/Subjects.js'

  ngOnInit() {
    // this.page = Math.ceil(this.danhmuc.length / this.sotrang);
    this.page = Math.ceil(20 / this.sotrang)
    this.dm.getDanhmuc().subscribe(dm=>{
      this.danhmuc=dm;
     
     
        
    })
    
       
     }
     
  }


