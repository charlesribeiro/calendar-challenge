import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  reminderText: string = "Reminder";
  weatherText: string;
  color: string = "yellow";

  constructor() { }

  ngOnInit(): void {
  }




}
