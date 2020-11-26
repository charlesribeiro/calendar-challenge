import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Utils } from '../../../utils';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {

  @Input() monthsAheadFromToday: number;
  @Input() week: number;

  date0: any;
  date1: any;
  date2: any;
  date3: any;
  date4: any;
  date5: any;
  date6: any;

  constructor() { }

  ngOnInit(): void {

    this.date0 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 0);
    this.date1 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 1);
    this.date2 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 2);
    this.date3 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 3);
    this.date4 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 4);
    this.date5 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 5);
    this.date6 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 6);

    // console.log(this.week, this.monthsAheadFromToday, this.date0);

  }

  ngOnChanges(): void{
    this.date0 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 0);
    this.date1 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 1);
    this.date2 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 2);
    this.date3 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 3);
    this.date4 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 4);
    this.date5 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 5);
    this.date6 = Utils.getDayToDisplayOnCalendarCell(this.monthsAheadFromToday, this.week, 6);

    // console.log(this.week, this.monthsAheadFromToday, this.date0);
  }

}
