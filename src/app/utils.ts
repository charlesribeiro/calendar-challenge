import { DateTime } from 'luxon';

export class Utils {
    static getFirstDayOfTheMonth( year: number, month: number,) {


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

    static getFirstDayToShowOnCalendarView(monthsAheadFromToday: number){
        //this currently shows the first sunday to show on the calendar view;
        
        return this.getFirstDayToShowOnCalendar(this.getFirstDayOfTheMonth(DateTime.local().year, DateTime.local().plus({months:monthsAheadFromToday}).month));
    }

    static getDaysToDisplayByWeek(monthsAheadFromToday: number, weekNumberInMonth: number){
        this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth});

        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 0}));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 1}));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 2}));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 3}));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 4}));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 5}));
        console.log(this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: 6}));
        console.log("----");


    }

    static getDayToDisplayOnCalendarCell(monthsAheadFromToday: number,weekNumberInMonth:number, weekDayFromSunday:number ){
        return this.getFirstDayToShowOnCalendarView(monthsAheadFromToday).plus({weeks: weekNumberInMonth}).plus({days: weekDayFromSunday});
    }
}