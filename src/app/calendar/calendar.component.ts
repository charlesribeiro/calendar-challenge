import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from '../state/reminder.actions';
import { Reminder, State } from '../shared/models/reminder';
import * as myActions from '../state/reminder.selector';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  @Input() monthsAheadFromToday: number;

  reminders$: Observable<Reminder[]>;

  year$: Observable<any>;

  constructor(private store: Store<State>) {
    this.reminders$ = this.store.pipe(select(myActions.getAllReminders));

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
