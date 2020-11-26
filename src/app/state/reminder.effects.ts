import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as myActions from './reminder.actions';

@Injectable()
export class ReminderEffects {

    addingReminder$ = createEffect(() => this.actions$
        .pipe(
            ofType(myActions.addReminder),
            map(({ reminder }) => console.log(reminder)),
        ),
        { dispatch: false });

    constructor(private actions$: Actions) {

    }
}
