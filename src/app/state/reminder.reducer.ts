import { createReducer, on, Action } from '@ngrx/store';
import { State } from '../shared/models/reminder';
import { addReminder, editReminder, removeAllRemindersFromDay, removeReminder } from './reminder.actions';

export const initialState: State = { reminders: [], text: 'Ok' };

const REMINDER_REDUCER = createReducer(
  initialState,

  on(addReminder, (state, { reminder }) => {
    return ({ reminders: [...state.reminders, reminder], text: state.text });
  }),
  on(removeReminder, (state, { reminder }) => {
    return ({ reminders: state.reminders.filter((rem) => rem.id !== reminder.id), text: state.text });
  }),
  on(removeAllRemindersFromDay, (state, { date }) => {
    return ({ reminders: [...state.reminders.filter((rem) =>
      !(rem.date.day === date.day && rem.date.month === date.month && rem.date.year === date.year))], text: state.text });
  }),
  on(editReminder, (state, { reminder }) => {
    return ({ reminders: [...state.reminders.filter((rem) => rem.id !== reminder.id), reminder], text: state.text });
  }),

);

export function reminderReducer(state: State | undefined, action: Action): State {
  return REMINDER_REDUCER(state, action);
}
