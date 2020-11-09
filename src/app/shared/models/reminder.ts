import { DateTime } from 'luxon';

export interface Reminder {
    reminderText: String;
    color?: String;
    city: String;
    date: DateTime;
    id: number;
    weatherText: String;
    weatherIcon?: String;
}

export interface State{
    reminders : Reminder [];
    text: String;
    // currentDate : DateTime;
}