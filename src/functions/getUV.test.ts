import { describe, it, expect } from "@jest/globals";
import getUV from './getUV';

describe('getUV', () => {
    it('should return "Low" for UV index below 3', () => {
        expect(getUV(2)).toBe('Low');
        expect(getUV(0)).toBe('Low');
    });

    it('should return "Moderate" for UV index between 3 and 5', () => {
        expect(getUV(3)).toBe('Moderate');
        expect(getUV(5)).toBe('Moderate');
    });

    it('should return "High" for UV index between 6 and 7', () => {
        expect(getUV(6)).toBe('High');
        expect(getUV(7)).toBe('High');
    });

    it('should return "Very High" for UV index between 8 and 10', () => {
        expect(getUV(8)).toBe('Very High');
        expect(getUV(10)).toBe('Very High');
    });

    it('should return "Extreme" for UV index greater than or equal to 11', () => {
        expect(getUV(11)).toBe('Extreme');
        expect(getUV(20)).toBe('Extreme');
    });

    it('should handle negative UV values', () => {
        expect(getUV(-5)).toBe('Low');
    });
});
