import { createReducer, on, Action } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Reminder, State } from '../shared/models/reminder';
import { Utils } from '../utils';
import { increment, decrement, reset, addReminder } from './reminder.actions';
 
export const initialState: State = {reminders :[], text:"Ok"};
 
const _reminderReducer = createReducer(
  initialState,

  on(addReminder, (state, {reminder})=> {
    console.log("state",state);
    return ({ reminders: [...state.reminders, reminder] ,text:state.text});
  }),

);
 
export function reminderReducer(state: State | undefined, action: Action): State {
  return _reminderReducer(state, action);
}