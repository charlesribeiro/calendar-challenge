import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, addReminder } from '../state/reminder.actions';
import { DateTime } from "luxon";
import { Reminder, State } from '../shared/models/reminder';
import { Utils } from '../utils';
import * as fromAppSelectors from '../state/reminder.selector'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() monthsAheadFromToday: number;

  reminders$: Observable<Reminder[]>;
  texto$: Observable<String>;

  year$: Observable<any>;

  constructor(private store: Store<State>) {
    this.texto$ = this.store.pipe(select(fromAppSelectors.getText));
    this.reminders$ = this.store.pipe(select(fromAppSelectors.getReminder));

    debugger;

  }

  ngOnInit(): void {

    // this.texto$ = this.store.pipe(select(fromAppSelectors.getText));
    // this.reminders$ = this.store.pipe(select(fromAppSelectors.getReminder));


    debugger;


  }


  addReminder() {

    let rem: Reminder = {
      reminderText: "Texto", date: "date",
      city: "New York"
    };
    this.store.dispatch(addReminder({ reminder: rem }));
    console.log("Reminder", this.texto$ )

  }


  next() {
    this.monthsAheadFromToday++;
  }

  previous() {
    this.monthsAheadFromToday--;
  }

  today() {
    this.monthsAheadFromToday = 0;
  }

  reset() {
    this.store.dispatch(reset());
  }

}
