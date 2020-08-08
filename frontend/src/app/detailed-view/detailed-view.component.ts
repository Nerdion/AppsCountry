import { Component, OnInit,Input } from '@angular/core';
import {getName} from 'country-list';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css'],
})
export class DetailedViewComponent implements OnInit {
  @Input() formgroups = [];
  detailList:any;
  countryCode:String;
  countryName:string;
  constructor() { 
  }
  ngOnInit(): void {
    this.detailList = this.formgroups[0];
    this.countryCode = 'flag-icon-' + this.detailList.cc.toLowerCase();
    //implement this using REST, also send countryName along with code
    this.countryName = getName(this.detailList.cc);
  }

  installApp() {
    window.open(this.detailList.url);
  }

}
