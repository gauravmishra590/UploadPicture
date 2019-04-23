import { Component,OnInit } from '@angular/core';
import {Pictures} from '../InstaSharing/pictures';

@Component({
  selector: 'app-InstaSharing',
  templateUrl: './InstaShare.component.html',
  styleUrls: ['./InstaShare.component.css'],
})

export class InstaSharingComponent implements OnInit {
  pics : any
  http: any
  name: any
  constructor() { this.selectedFile = []; }
ngOnInit() {
   console.log(Pictures.Pics)
this.pics=Pictures.Pics;
console.log(this.pics)

Pictures.Pics.sort(function(a,b){
  var c = new Date(a.timestamp);
  var d = new Date(b.timestamp);

  return c>d? -1 :c<d? 1:0
});

  }
 public selectedFile: any[]

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(event)
  }

  url: string;
  result : any
onSelectFile(event) { 
 
 if (event.target.files && event.target.files[0]) {
   var reader = new FileReader();

   reader.readAsDataURL(event.target.files[0]); 

   reader.onload = (event) => { 
    this.url = event.target.result;
   }
 }
}




}