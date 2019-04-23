import { Component, OnInit,Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Pictures} from '../pictures';
@Component({
  selector: 'app-Pictures',
  templateUrl: './Pictures.component.html',
  styleUrls: ['./Pictures.component.css']
})
export class PicturesComponent implements OnInit {
  @Input() picdata : any
 constructor() {
   
  }

  ngOnInit() {
    console.log(this.picdata);
  }
  like(event:Event) {
++this.picdata.likes
}
unLike(event:Event) {
--this.picdata.likes
}
 

}