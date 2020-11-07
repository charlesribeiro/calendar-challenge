import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addReminder } from 'src/app/state/counter.actions';
import { Reminder } from '../../../shared/models/reminder';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  reminders$: Observable<Reminder[]>;

  constructor(private store: Store<{ reminders: Reminder[] }>) {
    this.reminders$ = store.select('reminders');
  }
  ngOnInit(): void {
  }

  newReminder() {
    console.log("new reminder");


    let rem: Reminder = {
      reminderText: "Text", date: "date",
      city: "Boston"
    };
    this.store.dispatch(addReminder({ reminder: rem }));
    console.log("Reminder", this.reminders$)
  }

}
