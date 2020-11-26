import { DateTime } from 'luxon';

export interface Reminder {
    reminderText: string;
    color?: string;
    city: string;
    date: DateTime;
    id: number;
    weatherText: string;
    weatherIcon?: string;
}

export interface State{
    reminders: Reminder [];
    text: string;
    // currentDate : DateTime;
}
