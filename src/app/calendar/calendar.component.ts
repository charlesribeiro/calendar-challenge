import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, addReminder } from '../state/counter.actions';
import { DateTime } from "luxon";
import { Reminder, State } from '../shared/models/reminder';
import { Utils } from '../utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() monthsAheadFromToday: number;

  reminders: Observable<Reminder[]>;
  year$: Observable<any>;

  constructor(private store: Store<{reminders: Reminder[]}>) {
    // this.reminders$ = store.select(state=> state.reminders);
    // this.year$ = store.select<DateTime>(state=> state.currentDate);
    // this.reminders$ = this.store.pipe(select('reminders'))

    this.reminders = store.select(state => state.reminders)
  }

  ngOnInit(): void {

  }

 
  addReminder() {

    let rem: Reminder = {reminderText: "Texto", date : "date",
    city :"New York"
  };
    this.store.dispatch(addReminder({reminder: rem}));
    console.log("Reminder", this.reminders)

  }


  next(){
    this.monthsAheadFromToday++;
    debugger;
  }

  previous(){
    this.monthsAheadFromToday--;
  }

  today(){
    this.monthsAheadFromToday = 0;
  }

  reset() {
    this.store.dispatch(reset());
  }

}
