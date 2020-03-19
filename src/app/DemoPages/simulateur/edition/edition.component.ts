import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';



@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  download(){
    html2canvas(document.getElementById('page1-div')).then(canvas =>{
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
  
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p','mm','a4');
      var position = 0 ;
      pdf.addImage(contentDataURL,'PNG',0,position,200,250)
      pdf.save('file.pdf');
  })}
}
