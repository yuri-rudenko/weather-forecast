import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWeather } from "../http/getWeather";
import WeatherResponse from "../http/weather-interface";

interface WeatherState {
    data: WeatherResponse | null;
    loading: boolean;
    error: string | null;
    activeDay: number;
}

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: null,
    activeDay: 0,
};

export const getWeatherAsync = createAsyncThunk<WeatherResponse, string, { rejectValue: string }>(
    'weather/get',
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await getWeather(city);
            if (!response) throw new Error("Failed to fetch weather data.");
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWeatherAsync.fulfilled, (state, action: PayloadAction<WeatherResponse>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getWeatherAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default weatherSlice.reducer;