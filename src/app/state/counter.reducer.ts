import { createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Reminder, State } from '../shared/models/reminder';
import { Utils } from '../utils';
import { increment, decrement, reset, addReminder } from './counter.actions';
 
export const initialState: State = {reminders : [], currentDate: DateTime.local()};
 
const _counterReducer = createReducer(
  initialState,

  on(addReminder, (state, {reminder})=> {
    console.log(state );

    Utils.getDaysToDisplayByWeek(1, 0);
    Utils.getDaysToDisplayByWeek(1, 1);
    Utils.getDaysToDisplayByWeek(1, 2);
    Utils.getDaysToDisplayByWeek(1, 3);
    Utils.getDaysToDisplayByWeek(1, 4);

    return ({ reminders: [...state.reminders, reminder] , currentDate: state.currentDate});
  }),
  // on(setCurrentDate, (state, {date})=> {
  //   console.log(state );
  //   return ({ reminders: [...state.reminders, reminder] });
  // }),


);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}