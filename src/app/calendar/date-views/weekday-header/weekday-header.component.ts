import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../../../utils';

@Component({
  selector: 'app-weekday-header',
  templateUrl: './weekday-header.component.html',
  styleUrls: ['./weekday-header.component.css']
})
export class WeekdayHeaderComponent implements OnInit {

  @Input() monthsAheadFromToday: number;
  monthToDisplay = '';
  yearToDisplay = '';


  constructor() { }

  ngOnInit(): void {
    this.monthToDisplay = Utils.getMonthName(this.monthsAheadFromToday);
    this.yearToDisplay = String(Utils.getYear(this.monthsAheadFromToday));

  }

  ngOnChanges(): void {
    this.monthToDisplay = Utils.getMonthName(this.monthsAheadFromToday);
    this.yearToDisplay = String(Utils.getYear(this.monthsAheadFromToday));
  }

}
