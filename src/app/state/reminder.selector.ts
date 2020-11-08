import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DateTime } from 'luxon';
import { State } from '../shared/models/reminder';

export const getReminders = createFeatureSelector('reminderContext');

export const getReminder = createSelector(getReminders, (state: State) =>
    state.reminders,
)

export const getText = createSelector(getReminders, (state: State) =>
    state.text,
)

export const getRemindersOnDate = createSelector(getReminders, (state: State, props) =>
    state.reminders
)


