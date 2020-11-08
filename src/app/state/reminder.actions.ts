import { createAction, props } from '@ngrx/store';
import { Reminder } from '../shared/models/reminder';

export const increment = createAction('[Calendar] Next month');
export const decrement = createAction('[Calendar] Previous month');
export const reset = createAction('[Calendar] Reset to current month');

export const addReminder = createAction('[Calendar] Add reminder', props<{reminder: Reminder}>());