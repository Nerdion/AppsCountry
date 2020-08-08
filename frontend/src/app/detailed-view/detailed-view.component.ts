import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  @Input() formgroups = [];
  detailList:any;
  constructor() { 
  }
  ngOnInit(): void {
    this.detailList = this.formgroups[0];
  }

}
