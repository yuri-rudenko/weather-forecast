import axios from 'axios';
import getAutoSuggest, { City } from './getAutoSuggest';
import { describe, it, expect, jest, beforeEach } from "@jest/globals";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getAutoSuggest', () => {

    beforeEach(() => {
        process.env.REACT_APP_AUTO_SUGGEST_KEY = 'https://api.example.com/autosuggest?query={city}';
    });

    it('should return a list of cities on success', async () => {

        const mockCities: City[] = [
            { country: 'US', id: 1, lat: 34.0522, lon: -118.2437, name: 'Los Angeles', region: 'California', url: 'https://example.com' },
            { country: 'US', id: 2, lat: 40.7128, lon: -74.0060, name: 'New York', region: 'New York', url: 'https://example.com' }
        ];

        mockedAxios.get.mockResolvedValue({ data: mockCities });

        const result = await getAutoSuggest('Los');

        expect(result).toEqual(mockCities);
    });

    it('should return an empty array on failure', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network error'));

        const result = await getAutoSuggest('Nonexistent City');

        expect(result).toEqual([]);
    });

    it('should return null if the environment variable is missing', async () => {
        delete process.env.REACT_APP_AUTO_SUGGEST_KEY;

        const result = await getAutoSuggest('Los Angeles');

        expect(result).toBeNull();
    });

    it('should return an empty array if the city is not found', async () => {
        mockedAxios.get.mockResolvedValue({ data: [] });

        const result = await getAutoSuggest('Nonexistent City');

        expect(result).toEqual([]);
    });
});
