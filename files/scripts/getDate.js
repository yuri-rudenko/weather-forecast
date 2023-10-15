export function getDate() {
    let date = new Date();
    let month;
    switch (date.getMonth() + 1) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "Invalid Month";
    }
    let minutes
    if(date.getMinutes()<10) {
        minutes = '0' + date.getMinutes()
    }
    else minutes = date.getMinutes()
    let weekDay = getWeekDay(date.getDay())
    return {
        year: date.getFullYear(),
        month: month,
        day: date.getDate(),   
        weekDay: weekDay,
        weekDayNum: date.getDay(),
        time: date.getHours() + ":" + minutes
    }
}
export function getWeekDay(num) {
    let weekDay;
    switch (num) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        default:
            weekDay = "Invalid Day";
    }
    return weekDay
}