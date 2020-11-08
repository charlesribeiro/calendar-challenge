import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {

  @Input() monthsAheadFromToday: number;

  week = 0;

  constructor() { }


  ngOnInit(): void {
    debugger;
  }

  ngOnChanges(): void {
    debugger;
  }

}
