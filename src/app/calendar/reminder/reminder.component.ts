import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Reminder, State } from '../../../app/shared/models/reminder';
import { removeReminder } from '../../../app/state/reminder.actions';
import { ReminderService } from '../../../core/services/reminder.service';
import { ReminderDialogComponent } from '../reminder-dialog/reminder-dialog.component';

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
  weatherUrl: String="";

  color: String = "yellow";

  constructor(private store: Store<State>, public reminderService: ReminderService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reminderText = this.reminder.reminderText;
    this.cityText = this.reminder.city;
    this.date = this.reminder.date;
    this.weatherText = this.reminder.weatherText;
    this.color = this.reminder.color;
    this.weatherUrl = this.reminder.weatherIcon? `http://openweathermap.org/img/wn/${this.reminder.weatherIcon}@2x.png `: ``;
  }

  reminderClick(){
    console.warn(this.reminder);

    
    const dialog = this.dialog.open(ReminderDialogComponent, {
      data: {

        date: this.reminder.date,
        city: this.reminder.city,
        reminderText: this.reminder.reminderText,
        reminderId: this.reminder.id

      },
      maxWidth: 800,
    });

    // this.reminderService.retrieveForecastForGivenDay(reminder.)
    
  }

  deleteReminder(){
    this.store.dispatch(removeReminder({ reminder: this.reminder }));
  }

  






}
