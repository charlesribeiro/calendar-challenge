import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, addReminder } from '../state/counter.actions';
import { DateTime } from "luxon";
import { Reminder } from '../shared/models/reminder';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  reminders$: Observable<Reminder[]>;


  constructor(private store: Store<{ reminders: Reminder[] }>) {
    this.reminders$ = store.select('reminders');
  }

  ngOnInit(): void {
    // console.log("Current date:", DateTime.local());
    // console.log("Reminder", this.reminders$)

  }

  increment() {
    this.store.dispatch(increment());
  }

  addReminder() {

    let rem: Reminder = {reminderText: "Texto", date : "date",
    city :"New York"
  };
    this.store.dispatch(addReminder({reminder: rem}));
    console.log("Reminder", this.reminders$)

  }


  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
