import getWeekDay from "./getWeekDay";

interface DateDetails {
    year: number;
    month: string;
    day: number;
    weekDay: string;
    weekDayNum: number;
    time: string;
}

export default function getDate(curDate: Date): DateDetails {
    let date = new Date(curDate);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[date.getMonth()];

    let minutes: string;
    if (date.getMinutes() < 10) {
        minutes = '0' + date.getMinutes();
    } else {
        minutes = date.getMinutes().toString();
    }

    return {
        year: date.getFullYear(),
        month: month,
        day: date.getDate(),
        weekDay: getWeekDay(date.getDay(), true),
        weekDayNum: date.getDay(),
        time: `${date.getHours()}:${minutes}`
    };
}
