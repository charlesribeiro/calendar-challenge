import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DateTime } from 'luxon';
import { State } from '../shared/models/reminder';

export const getReminders = createFeatureSelector('reminderContext');

export const getAllReminders = createSelector(getReminders, (state: State) =>
    state.reminders,
)

export const getText = createSelector(getReminders, (state: State) =>
    state.text,
)

export const getRemindersOnDate = createSelector(getReminders, (state: State, date) =>
    // state.reminders.sort((a, b) => b.date.ts - a.date.ts)
    //    console.log(state.reminders, date);
        state.reminders.filter(rem=> {
            debugger;
            // console.warn(rem, date, date.date);
            // console.log(rem.date, date.date);
           return (rem.date.year === date.date.year && rem.date.month === date.date.month && rem.date.day === date.date.day)
        })
    
)


