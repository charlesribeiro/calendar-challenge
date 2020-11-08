import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Reminder } from 'src/app/shared/models/reminder';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {


  @Input() reminder: Reminder;
  
  reminderText: string = "Reminder";
  weatherText: string;
  date: DateTime;
  cityText: string = "City";

  color: string = "yellow";

  constructor() { }

  ngOnInit(): void {
    this.reminderText = this.reminder.reminderText;
    this.cityText = this.reminder.city;
    this.date = this.reminder.date;
  }

  reminderClick(){
    console.warn(this.reminder);
  }






}
