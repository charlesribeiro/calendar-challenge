import { DateTime } from 'luxon';

export interface Reminder {
    reminderText: string;
    color?: number;
    city: string;
    date: DateTime;
    id: number;
}

export interface State{
    reminders : Reminder [];
    text: String;
    // currentDate : DateTime;
}