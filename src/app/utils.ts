import { DateTime } from 'luxon';

export class Utils {
    static getFirstDayOfTheCurrentMonth(){


        const firstDayOfTheCurrentMonth: DateTime = (DateTime.local(DateTime.local().year, DateTime.local().month, 1 ));
        console.log(firstDayOfTheCurrentMonth);
        console.log("it is the "+firstDayOfTheCurrentMonth.weekday, firstDayOfTheCurrentMonth.weekdayLong +" of the week");
        debugger;
        
        return DateTime.local();
    }
}