export default function isGreaterDate(date1: Date, date2: Date): boolean {
    const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
    return differenceInMinutes >= 10;
}
