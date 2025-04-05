import axios from "axios";
import { getWeather } from "./getWeather";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import WeatherResponse from "./weather-interface";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getWeather", () => {

    beforeEach(() => {
        process.env.REACT_APP_WEATHER_KEY = 'https://api.weatherapi.com/v1/forecast.json?key=key123&q={city}&days=5&aqi=no&alerts=no';
    });

    it("should return weather data when the API request is successful", async () => {
        const mockWeatherResponse: WeatherResponse = {
            current: {
                cloud: 30,
                condition: { code: 1000, icon: "icon.png", text: "Clear" },
                dewpoint_c: 15,
                dewpoint_f: 59,
                feelslike_c: 20,
                feelslike_f: 68,
                gust_kph: 15,
                gust_mph: 9,
                heatindex_c: 25,
                heatindex_f: 77,
                humidity: 50,
                is_day: 1,
                last_updated: "2025-04-05 10:00",
                last_updated_epoch: 1617642300,
                precip_in: 0,
                precip_mm: 0,
                pressure_in: 30,
                pressure_mb: 1013,
                temp_c: 22,
                temp_f: 72,
                uv: 3,
                vis_km: 10,
                vis_miles: 6,
                wind_degree: 180,
                wind_dir: "South",
                wind_kph: 20,
                wind_mph: 12,
                windchill_c: 21,
                windchill_f: 70,
            },
            forecast: {
                forecastday: [],
            },
            location: {
                country: "CountryName",
                lat: 0,
                localtime: "2025-04-05 10:00",
                localtime_epoch: 1617642300,
                lon: 0,
                name: "CityName",
                region: "RegionName",
                tz_id: "UTC",
            },
        };

        const city = "London";
        mockedAxios.get.mockResolvedValue({ data: mockWeatherResponse });

        const result = await getWeather(city);

        expect(result).not.toBeNull();
        expect(result?.current.temp_c).toBe(22);
        expect(result?.location.name).toBe("CityName");
        expect(result?.current.condition.text).toBe("Clear");
    });

    it("should return null when the API request fails", async () => {
        const city = "London";

        mockedAxios.get.mockRejectedValue(new Error("Network error"));

        const result = await getWeather(city);

        expect(result).toBeNull();
    });

    it("should return null when REACT_APP_WEATHER_KEY is not defined", async () => {
        delete process.env.REACT_APP_WEATHER_KEY;

        const result = await getWeather("London");

        expect(result).toBeNull();
    });

    it("should return null object if the city is not found", async () => {
        const city = "Nonexistent City";
      
        mockedAxios.get.mockResolvedValue({
          data: { current: null, forecast: { forecastday: [] }, location: null }
        });
      
        const result = await getWeather(city);
      
        expect(result).toEqual({ current: null, forecast: { forecastday: [] }, location: null });
      });
});
