import { DateTime } from 'luxon';

export class Utils {
    static getFirstDayOfTheMonth(year: number, month: number, ): DateTime {

        const firstDayOfTheCurrentMonth: DateTime = (DateTime.local(year, month, 1));
        return firstDayOfTheCurrentMonth;
    }

    static getFirstDayToShowOnCalendar(date: DateTime): DateTime {

        const dateToDisplay: DateTime = date;
        switch (date.weekday) {
            case 7: // sunday
                return dateToDisplay;
            default:
                return dateToDisplay.minus({ days: date.weekday });
        }
        // 7: sunday
        // 1: monday
        // 2: tuesday
        // 3: wednesday
        // 4: thursay
        // 5: friday
    }

    static getFirstDayToShowOnCalendarView(monthsAheadFromToday: number): DateTime {
        // this currently shows the first sunday to show on the calendar view;
        return this.getFirstDayToShowOnCalendar(
            this.getFirstDayOfTheMonth(
                DateTime.local().plus({ months: monthsAheadFromToday }).year, DateTime.local().plus({ months: monthsAheadFromToday }).month
            )
        );
    }

    static getDayToDisplayOnCalendarCell(monthsAheadFromToday: number, weekNumberInMonth: number, weekDayFromSunday: number): DateTime {
        return this.getFirstDayToShowOnCalendarView(monthsAheadFromToday)
        .plus({ weeks: weekNumberInMonth })
        .plus({ days: weekDayFromSunday });
    }

    static getMonthName(monthsAheadFromToday: number): string {
        return DateTime.local().plus({ months: monthsAheadFromToday }).monthLong;
    }
    static getYear(monthsAheadFromToday: number): number {
        return DateTime.local().plus({ months: monthsAheadFromToday }).year;
    }

    static isWeatherForecastAvailable(date: DateTime): boolean {
        // if the user creates an appointment in the past or 5 days from now, the OpenWeather API should not be used
        return date.diff(DateTime.local(), ['days']).toObject().days > 0 && date.diff(DateTime.local(), ['days']).toObject().days <= 5;
    }

    static generateUniqueIdForReminder(): number {

        const id = new Uint32Array(1);
        window.crypto.getRandomValues(id);
        return id[0];
    }
}
