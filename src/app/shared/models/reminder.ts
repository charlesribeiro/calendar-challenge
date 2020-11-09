import { DateTime } from 'luxon';

export interface Reminder {
    reminderText: String;
    color?: number;
    city: String;
    date: DateTime;
    id: number;
    weatherText: String;
}

export interface State{
    reminders : Reminder [];
    text: String;
    // currentDate : DateTime;
}