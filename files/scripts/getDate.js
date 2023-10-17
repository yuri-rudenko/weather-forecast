export function getDate(curDate) {
    let date = new Date(curDate);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[date.getMonth()];
    let minutes
    if(date.getMinutes()<10) {
        minutes = '0' + date.getMinutes()
    }
    else minutes = date.getMinutes()
    return {
        year: date.getFullYear(),
        month: month,
        day: date.getDate(),   
        weekDay: getWeekDay(date.getDay(), true),
        weekDayNum: date.getDay(),
        time: date.getHours() + ":" + minutes
    }
}
export function getWeekDay(num, long) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysOfWeekLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    if(long) return daysOfWeekLong[num]
    else return daysOfWeek[num]
}
export function getDayOfWeekIndex(dateString) {
    const date = new Date(dateString)
    const dayIndex = date.getDay()
  
    return dayIndex
  }