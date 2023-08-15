import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// API Necessities,
const apiKey = 'adf059698fbebe496a37541762d23025';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Array of Iraqi provinces
const iraqProvinces = [
  'Baghdad',
  'Basra',
  'Nineveh',
  'Anbar',
  'Sulaymaniyah',
  'Erbil',
  'Dohuk',
  'Karbala',
  'Babil',
  'Najaf',
  'Kirkuk',
  'Diyala',
  'Maysan',
  'Muthanna',
  'Wasit',
  'Saladin',
  'Dhi Qar',
];

// An asyncthunk for fetching weather data for Iraqi provinces
const fetchIraqWeather = createAsyncThunk('weather/fetchIraqWeather', async () => {
  const dataPromises = iraqProvinces.map(async (province) => {
    // API Fetch by axios=> uses JS Promises to handle asynchronous operations!
    const response = await axios.get(
      `${baseUrl}?q=${province},IQ&appid=${apiKey}&units=metric`,
    );
    return response.data;
  });
  // Promise.all takes Array of Promises and Return single promise!
  return Promise.all(dataPromises);
  // Promise is JS object defines state like pending, fulfilled and rejected of async operation!
});

// Redux Slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    // API response
    builder
      .addCase(fetchIraqWeather.pending, (state) => (
        { ...state, status: 'loading' }
      ))
      .addCase(fetchIraqWeather.fulfilled, (state, action) => (
        { ...state, status: 'success', weather: action.payload }
      ))
      .addCase(fetchIraqWeather.rejected, (state, action) => (
        { ...state, status: 'error', error: action.error.message }
      ));
  },
});

export default weatherSlice.reducer;
export { fetchIraqWeather };
