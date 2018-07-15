import { Component, OnInit, Input, Inject, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Input() title :any;
  constructor() { }

  ngOnInit() {
    
  }

}
