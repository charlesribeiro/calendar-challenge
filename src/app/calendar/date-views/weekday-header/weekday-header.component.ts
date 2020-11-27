import { Component, Input, OnChanges } from '@angular/core';
import { Utils } from '../../../utils';

@Component({
  selector: 'app-weekday-header',
  templateUrl: './weekday-header.component.html',
  styleUrls: ['./weekday-header.component.css']
})
export class WeekdayHeaderComponent implements OnChanges {

  @Input() monthsAheadFromToday: number;
  monthToDisplay = '';
  yearToDisplay = '';

  ngOnChanges(): void {
    this.monthToDisplay = Utils.getMonthName(this.monthsAheadFromToday);
    this.yearToDisplay = String(Utils.getYear(this.monthsAheadFromToday));
  }

}
