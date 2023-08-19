import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Province from '../components/Provinces';
import store from '../redux/store';

test('renders loading message when weather data is undefined', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Province />
      </MemoryRouter>
    </Provider>,
  );

  const loadingMessage = screen.getByText('Loading...');
  expect(loadingMessage).toBeInTheDocument();
});

test('displays "No results found." when search yields no results', async () => {
  const mockWeatherData = [
    { province: 'Baghdad', weather: { main: { temp: 25 } } },
  ];

  // Mock the fetchIraqWeather action to return the mockWeatherData
  jest.mock('../redux/slice', () => ({
    fetchIraqWeather: jest.fn(() => ({
      type: 'weather/fetchIraqWeather',
      payload: mockWeatherData,
    })),
  }));

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Province />
      </MemoryRouter>
    </Provider>,
  );
});
