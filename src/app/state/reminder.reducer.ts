import { createReducer, on, Action } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Reminder, State } from '../shared/models/reminder';
import { Utils } from '../utils';
import { addReminder, editReminder, removeAllRemindersFromDay, removeReminder } from './reminder.actions';

export const initialState: State = { reminders: [], text: "Ok" };

const _reminderReducer = createReducer(
  initialState,

  on(addReminder, (state, { reminder }) => {
    console.log("state", state);
    return ({ reminders: [...state.reminders, reminder], text: state.text });
  }),
  on(removeReminder, (state, { reminder }) => {
    console.log("state", state);
    return ({ reminders: state.reminders.filter((rem)=>rem.id!==reminder.id), text: state.text });
  }),
  on(removeAllRemindersFromDay, (state, { date }) => {
    console.log("state", state.reminders, date);
    return ({ reminders: [...state.reminders.filter((rem)=>!(rem.date.day===date.day && rem.date.month===date.month && rem.date.year===date.year))], text: state.text });
  }),
  on(editReminder, (state, { reminder }) => {
    console.log("state", state);
    return ({ reminders: [...state.reminders.filter((rem)=>rem.id!==reminder.id), reminder], text: state.text });
  }),

);

export function reminderReducer(state: State | undefined, action: Action): State {
  return _reminderReducer(state, action);
}