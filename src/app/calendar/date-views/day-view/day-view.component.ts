import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { addReminder } from 'src/app/state/reminder.actions';
import { Reminder, State } from '../../../shared/models/reminder';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  reminders$: Observable<Reminder[]>;

  @Input() isWeekend: boolean;
  @Input() date: DateTime;

  constructor(private store: Store<State>) {
    this.reminders$ = store.select('reminders');
  }
  ngOnInit(): void {
    // console.log("isWeekend", this.isWeekend);
    console.log("date", this.date);
  }

  newReminder() {
    console.log("new reminder");


    let rem: Reminder = {
      reminderText: "Text", date: this.date,
      city: "Boston"
    };
    this.store.dispatch(addReminder({ reminder: rem }));
    console.log("Reminder", this.reminders$)
  }

}
