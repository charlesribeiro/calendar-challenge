import { DateTime } from 'luxon';

export class Utils {
    static getFirstDayOfTheMonth(year: number, month: number,) {


        const firstDayOfTheCurrentMonth: DateTime = (DateTime.local(year, month, 1));

        return firstDayOfTheCurrentMonth;


    }

    static getFirstDayToShowOnCalendar(date: DateTime) {

        let dateToDisplay: DateTime = date;
        switch (date.weekday) {
            case 7: //sunday
                return dateToDisplay;
            default:
                return dateToDisplay.minus({ days: date.weekday })

        }

        // 7: sunday
        // 1: monday
        // 2: tuesday
        // 3: wednesday
        // 4: thursay
        // 5: sunday
    }

    static getFirstDayToShowOnCalendarView(monthsAheadFromToday: number) {
        //this currently shows the first sunday to show on the calendar view;

        return this.getFirstDayToShowOnCalendar(this.getFirstDayOfTheMonth(DateTime.local().plus({ months: monthsAheadFromToday }).year, DateTime.local().plus({ months: monthsAheadFromToday }).month));
    }

    static getDaysToDisplayByWeek(monthsAheadFromToday: number, weekNumberInMonth: number) {
        console.log("first day", monthsAheadFromToday, weekNumberInMonth, this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }));

        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 0 }));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 1 }));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 2 }));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 3 }));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 4 }));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 5 }));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: 6 }));
        console.log("----");


    }

    static getDayToDisplayOnCalendarCell(monthsAheadFromToday: number, weekNumberInMonth: number, weekDayFromSunday: number) {
        return this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({ weeks: weekNumberInMonth }).plus({ days: weekDayFromSunday });
    }

    static getMonthName(monthsAheadFromToday: number) {
        return DateTime.local().plus({ months: monthsAheadFromToday }).monthLong;
    }
    static getYear(monthsAheadFromToday: number) {
        return DateTime.local().plus({ months: monthsAheadFromToday }).year;
    }

    // static getWeatherOnDateFromWeatherArray(){
    //     return 
    // }

    static isWeatherForecastAvailable(date: DateTime) {
        return date.diff(DateTime.local(), ['days']).toObject().days > 0 && date.diff(DateTime.local(), ['days']).toObject().days <= 5;
    }

    static generateUniqueIdForReminder() {

        const id = new Uint32Array(1);
        window.crypto.getRandomValues(id);
        return id[0];
    }
}