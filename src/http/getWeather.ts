import axios from "axios";
import WeatherResponse from "./weather-interface";

export async function getWeather(city: string): Promise<WeatherResponse | null> {
    const urlTemplate = process.env.REACT_APP_WEATHER_KEY;

    if (!urlTemplate) {
        return null;
    }

    const url = urlTemplate.replace("{city}", city);

    try {
        const response = await axios.get(url);
        const data: WeatherResponse = response.data;

        return data;
    } catch (error) {
        return null;
    }
}