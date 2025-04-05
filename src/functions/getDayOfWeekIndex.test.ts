import { describe, it, expect } from "@jest/globals";
import getDayOfWeekIndex from './getDayofWeekIndex';

describe('getDayOfWeekIndex', () => {
    it('should return the correct day index for a given date string', () => {
        expect(getDayOfWeekIndex('2025-04-04')).toBe(5);
        expect(getDayOfWeekIndex('2025-04-05')).toBe(6);
        expect(getDayOfWeekIndex('2025-04-06')).toBe(0);
    });

    it('should handle Date objects correctly', () => {
        const date = new Date('2025-04-04');
        expect(getDayOfWeekIndex(date)).toBe(5);
    });

    it('should handle edge case for invalid date', () => {
        expect(getDayOfWeekIndex('invalid-date')).toBe(NaN);
    });
});
