import axios from "axios";

export interface City {
    country: string;
    id: number
    lat: number;
    lon: number;
    name: string;
    region: string;
    url: string;
}



export default async function getAutoSuggest(city: string): Promise<City[] | null> {

    const urlTemplate = process.env.REACT_APP_AUTO_SUGGEST_KEY;

    if (!urlTemplate) {
        return null;
    }

    const url = urlTemplate.replace("{city}", city);

    try {
        const response = await axios.get(url);

        console.log(response.data);

        return response.data;
    } catch (error) {
        return [];
    }
}