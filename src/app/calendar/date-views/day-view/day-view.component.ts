import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { addReminder } from 'src/app/state/reminder.actions';
import { Reminder, State } from '../../../shared/models/reminder';
import * as myActions from '../../../state/reminder.selector'

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  @Input() isWeekend: boolean;
  @Input() date: DateTime;

  reminders$: Observable<Reminder[]>;
  texto$: Observable<String>;

  year$: Observable<any>;

  constructor(private store: Store<State>) {
    this.texto$ = this.store.pipe(select(myActions.getText));
    // this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate(this.date)));
    this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate, {date: this.date}));

  }

  ngOnInit(): void {
    console.log("date", this.date);
    this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate, {date: this.date}));

  }

  ngOnChanges(): void {
    console.log("date", this.date);
    this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate, {date: this.date}));

  }

  newReminder() {
    console.log("new reminder", this.date);

    let rem: Reminder = {
      reminderText: "Text", date: this.date,
      city: "Boston"
    };
    this.store.dispatch(addReminder({ reminder: rem }));
    console.log("Reminder", this.reminders$)
  }

}
