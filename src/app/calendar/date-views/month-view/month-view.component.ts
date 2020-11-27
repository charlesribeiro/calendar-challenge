import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  @Input() monthsAheadFromToday: number;

  week = 0;
  weeksToShowByView = [0, 1, 2, 3, 4];

}
