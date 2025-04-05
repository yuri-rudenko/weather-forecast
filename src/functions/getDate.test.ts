import { describe, it, expect } from "@jest/globals";
import getDate from "./getDate";

describe("getDate", () => {
    it("should return correct date details", () => {
        const testDate = new Date("2025-04-04T15:09:00");
        const result = getDate(testDate);

        expect(result.year).toBe(2025);
        expect(result.month).toBe("April");
        expect(result.day).toBe(4);
        expect(result.weekDayNum).toBe(5);
        expect(result.time).toBe("15:09");
    });

    it("should format minutes correctly when less than 10", () => {
        const testDate = new Date("2025-04-04T15:05:00");
        const result = getDate(testDate);

        expect(result.time).toBe("15:05");
    });
});
