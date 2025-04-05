import { describe, it, expect } from "@jest/globals";
import getWeekDay from './getWeekDay';

describe('getWeekDay', () => {
    it('should return short form of day name', () => {
        expect(getWeekDay(0, false)).toBe('Sun'); 
        expect(getWeekDay(1, false)).toBe('Mon'); 
        expect(getWeekDay(6, false)).toBe('Sat');
    });

    it('should return long form of day name', () => {
        expect(getWeekDay(0, true)).toBe('Sunday');
        expect(getWeekDay(1, true)).toBe('Monday');
        expect(getWeekDay(6, true)).toBe('Saturday');
    });

    it('should handle invalid day index', () => {
        expect(getWeekDay(7, false)).toBeUndefined();
        expect(getWeekDay(7, true)).toBeUndefined();
    });
});
