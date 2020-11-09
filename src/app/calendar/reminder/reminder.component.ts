import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Reminder, State } from 'src/app/shared/models/reminder';
import { removeReminder } from 'src/app/state/reminder.actions';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {


  @Input() reminder: Reminder;
  
  reminderText: String = "Reminder";
  weatherText: String;
  date: DateTime;
  cityText: String = "City";

  color: String = "yellow";

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.reminderText = this.reminder.reminderText;
    this.cityText = this.reminder.city;
    this.date = this.reminder.date;
    this.weatherText = this.reminder.weatherText;
  }

  reminderClick(){
    console.warn(this.reminder);
    this.store.dispatch(removeReminder({ reminder: this.reminder }));

  }

  






}
