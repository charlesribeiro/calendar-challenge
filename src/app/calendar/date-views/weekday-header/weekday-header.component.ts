import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekday-header',
  templateUrl: './weekday-header.component.html',
  styleUrls: ['./weekday-header.component.css']
})
export class WeekdayHeaderComponent implements OnInit {

  @Input() monthsAheadFromToday: number;

  constructor() { }

  ngOnInit(): void {
  }

}
