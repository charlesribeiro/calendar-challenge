import { DateTime } from 'luxon';

export interface Reminder {
    reminderText: string;
    color?: number;
    city: string;
    date: any;
}

export interface State{
    reminders : Reminder [];
    // currentDate : DateTime;
}