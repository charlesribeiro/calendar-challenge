import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../shared/models/reminder';

export const getReminders = createFeatureSelector('reminderContext');

export const getAllReminders = createSelector(getReminders, (state: State) =>
    state.reminders,
);

export const getText = createSelector(getReminders, (state: State) =>
    state.text,
);

export const getRemindersOnDate = createSelector(getReminders, (state: State, date) =>

    state.reminders.filter(rem => {
        return (rem.date.year === date.date.year && rem.date.month === date.date.month && rem.date.day === date.date.day);
    }).sort((a, b) => Number(a.date.toMillis()) - Number(b.date.toMillis()))

);
