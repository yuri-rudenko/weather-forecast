export default function getDayOfWeekIndex(dateString: string | Date): number {
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return dayIndex;
}