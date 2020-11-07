import { createAction, props } from '@ngrx/store';
import { Reminder } from '../shared/models/reminder';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const addReminder = createAction('[Calendar] Add reminder', props<{reminder: Reminder}>());