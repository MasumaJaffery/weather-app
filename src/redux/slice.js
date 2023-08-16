import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API Necessities
const apiKey = 'adf059698fbebe496a37541762d23025';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Array of  with coordinatesIraqi provinces
const iraqProvinces = [
  { name: 'Baghdad', lat: 33.3152, lon: 44.3661 },
  { name: 'Basra', lat: 30.5119, lon: 47.8136 },
  { name: 'Nineveh', lat: 36.3544, lon: 43.1432 },
  { name: 'Anbar', lat: 33.3736, lon: 42.3639 },
  { name: 'Sulaymaniyah', lat: 35.5649, lon: 45.4314 },
  { name: 'Erbil', lat: 36.1928, lon: 44.0106 },
  { name: 'Dohuk', lat: 36.8651, lon: 42.9903 },
  { name: 'Karbala', lat: 32.6052, lon: 44.0249 },
  { name: 'Babil', lat: 32.5045, lon: 44.4208 },
  { name: 'Najaf', lat: 31.9988, lon: 44.3215 },
  { name: 'Kirkuk', lat: 35.4681, lon: 44.3922 },
  { name: 'Diyala', lat: 33.7339, lon: 45.3661 },
  { name: 'Maysan', lat: 31.8457, lon: 47.1749 },
  { name: 'Muthanna', lat: 29.8162, lon: 45.9404 },
  { name: 'Wasit', lat: 32.1792, lon: 45.0382 },
  { name: 'Saladin', lat: 34.0065, lon: 44.1456 },
  { name: 'Dhi Qar', lat: 31.4177, lon: 46.1715 },
];

// Create an async thunk to fetch weather data for Iraqi provinces
const fetchIraqWeather = createAsyncThunk(
  'weather/fetchIraqWeather',
  async () => {
    try {
      const weatherDataPromises = iraqProvinces.map(async (province) => {
        const response = await fetch(`${baseUrl}?lat=${province.lat}&lon=${province.lon}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return { province: province.name, weather: data };
      });

      const weatherData = await Promise.all(weatherDataPromises);
      return weatherData;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
);

// Redux Slice for Weather Data
const weatherSlice = createSlice({
  name: 'weather',
  initialState: { status: 'idle', data: [] },
  reducers: {},
  extraReducers(builder) {
    // Use the async thunk action as an extra reducer
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
