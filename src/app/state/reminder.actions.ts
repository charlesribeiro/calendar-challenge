import { createAction, props } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Reminder } from '../shared/models/reminder';

export const increment = createAction('[Calendar] Next month');
export const decrement = createAction('[Calendar] Previous month');
export const reset = createAction('[Calendar] Reset to current month');

export const addReminder = createAction('[Calendar] Add reminder', props<{reminder: Reminder}>());
export const removeReminder = createAction('[Calendar] Remove reminder', props<{reminder: Reminder}>());
export const editReminder = createAction('[Calendar] Edit reminder', props<{reminder: Reminder}>());

export const resetAllReminders = createAction('[Calendar] Reset all reminders', props<{reminder: Reminder}>());
export const removeAllRemindersFromDay = createAction('[Calendar] Remove all reminders', props<{date: DateTime}>());