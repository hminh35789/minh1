import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {ServerService} from '../server.service';
@Component({
  selector: 'app-cauhoi',
  templateUrl: './cauhoi.component.html',
  styleUrls: ['./cauhoi.component.css']
})
export class CauhoiComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,private ss:ServerService) { }
  correctAns;
  sumMark;dung;
  itemPerPage = 1;
  currentPage = 1;
 sumM:number;
 ans;
  answer: any;
  totalPage: any;
  question;
  urlSubject = './assets/Quizs/';
  poduct;
  toltalMark;
  product
  ngOnInit() {
    const pid=+this.route.snapshot.paramMap.get('id');
    this.ss.getpt().subscribe(p=>{
      this.poduct=p;
      this.product=this.poduct.find(x=>x.id===pid);
      
    })


    switch (pid) {
      case 1: this.urlSubject += 'ADAV.js'; break;
      case 2: this.urlSubject += 'ADBS.js'; break;
      case 3: this.urlSubject += 'ADTE.js'; break;
      case 4: this.urlSubject += 'ADUI.js'; break;
      case 5: this.urlSubject += 'ASNE.js'; break;
      case 6: this.urlSubject += 'CLCO.js'; break;
      case 7: this.urlSubject += 'DBAV.js'; break;
      case 8: this.urlSubject += 'DBBS.js'; break;
      case 9: this.urlSubject += 'GAME.js'; break;
      case 10: this.urlSubject += 'HTCS.js'; break;
      case 11: this.urlSubject += 'INMA.js'; break;
      case 12: this.urlSubject += 'JAAV.js'; break;
      case 13: this.urlSubject += 'JABS.js'; break;
      case 14: this.urlSubject += 'JSPR.js'; break;
      case 15: this.urlSubject += 'LAYO.js'; break;
      case 16: this.urlSubject += 'MOWE.js'; break;
      case 17: this.urlSubject += 'PHPP.js'; break;
      case 18: this.urlSubject += 'PMAG.js'; break;
      case 19: this.urlSubject += 'VBPR.js'; break;
      case 20: this.urlSubject += 'WEBU.js'; break;
    }

     this.getQuestion().subscribe(data => {
      this.question = data;
      this.answer = this.question[this.currentPage - 1].Answers;
      this.totalPage = Math.ceil(this.question.length / this.itemPerPage);
    })

    
  }

 

  getQuestion() {
    return this.http.get(this.urlSubject)
  }
  // next() {
  //   if (this.currentPage < this.totalPage) {
  //     this.currentPage++;
  //     this.answer = this.question[this.currentPage - 1].Answers;
  //     console.log(this.correctAns)
  //     if (this.correctAns == this.question[this.currentPage - 2].AnswerId) {
  //       this.sumMark++;
  //       console.log(this.sumMark);
  //     }
  //   }

  // }
  pre() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.answer = this.question[this.currentPage - 1].Answers;
    }
  }
  
  next() {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.answer = this.question[this.currentPage - 1].Answers;
      console.log(this.correctAns);
      
      if (this.correctAns == this.question[this.currentPage - 2].AnswerId) {
        this.sumMark++;
        console.log(this.sumMark);
      }
    }

  }
  finish() {
    
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.answer = this.question[this.currentPage - 1].Answers;
      console.log(this.correctAns)
      if (this.correctAns == this.question[this.currentPage - 2].AnswerId) {
        this.sumMark++;
      }
    }
    this.toltalMark = this.sumMark;
    console.log(this.toltalMark)
  }
sai(){
  
    this.dung('dung roi')
  }
}

  // }
  // last() {
  //   this.currentPage = this.totalPage
  // }
  // first() {
  //   this.currentPage = 1;
  // }
  // finish() {
  //   this.finished = true;
  //   if (this.currentPage < this.totalPage) {
  //     this.currentPage++;
  //     this.answer = this.question[this.currentPage - 1].Answers;
  //     console.log(this.correctAns)
  //     if (this.correctAns == this.question[this.currentPage - 2].AnswerId) {
  //       this.sumMark++;
  //     }
  //   }
  //   this.toltalMark = this.sumMark;
  //   console.log(this.toltalMark)
  // }
  // yesNoQuestion() {
  //   this.finished = false;
  // }



