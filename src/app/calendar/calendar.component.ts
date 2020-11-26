import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset, addReminder } from '../state/reminder.actions';
import { DateTime } from 'luxon';
import { Reminder, State } from '../shared/models/reminder';
import * as myActions from '../state/reminder.selector';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() monthsAheadFromToday: number;

  reminders$: Observable<Reminder[]>;

  year$: Observable<any>;

  constructor(private store: Store<State>) {
    this.reminders$ = this.store.pipe(select(myActions.getAllReminders));

  }

  ngOnInit(): void {
  }

  addReminder(): void {

    const rem: Reminder = {
      reminderText: 'Lorem Ipsum', date: DateTime.local(),
      city: 'New York',
      id: 1,
      weatherText: '--'
    };

    this.store.dispatch(addReminder({ reminder: rem }));

  }

  next(): void {
    this.monthsAheadFromToday++;
  }

  previous(): void {
    this.monthsAheadFromToday--;
  }

  today(): void {
    this.monthsAheadFromToday = 0;
  }

  reset(): void {
    this.store.dispatch(reset());
  }

}
