import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather.slice';


const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
