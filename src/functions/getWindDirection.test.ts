import { describe, it, expect } from "@jest/globals";
import getWindDirection from './getWindDirection';

describe('getWindDirection', () => {
    it('should return "North" for 0 degrees', () => {
        expect(getWindDirection(0)).toBe('North');
    });

    it('should return "North-East" for 45 degrees', () => {
        expect(getWindDirection(45)).toBe('North-East');
    });

    it('should return "East" for 90 degrees', () => {
        expect(getWindDirection(90)).toBe('East');
    });

    it('should return "South-East" for 135 degrees', () => {
        expect(getWindDirection(135)).toBe('South-East');
    });

    it('should return "South" for 180 degrees', () => {
        expect(getWindDirection(180)).toBe('South');
    });

    it('should return "South-West" for 225 degrees', () => {
        expect(getWindDirection(225)).toBe('South-West');
    });

    it('should return "West" for 270 degrees', () => {
        expect(getWindDirection(270)).toBe('West');
    });

    it('should return "North-West" for 315 degrees', () => {
        expect(getWindDirection(315)).toBe('North-West');
    });

    it('should wrap around for values greater than 360 degrees', () => {
        expect(getWindDirection(400)).toBe('North-East');
    });

    it('should wrap around for negative values', () => {
        expect(getWindDirection(-45)).toBe('North-West');
    });
});
