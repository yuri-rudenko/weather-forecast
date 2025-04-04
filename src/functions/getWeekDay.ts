
export default function getWeekDay(num: number, long : boolean): string {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysOfWeekLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    if(long) return daysOfWeekLong[num]
    else return daysOfWeek[num]
}