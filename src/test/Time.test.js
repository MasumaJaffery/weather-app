import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Time from '../components/Time';

jest.useFakeTimers();

describe('Time component', () => {
  it('renders the current time', async () => {
    render(<Time />);
    jest.advanceTimersByTime(1000);
    await waitFor(() => screen.getByText(/\d{1,2}:\d{2}:\d{2} (AM|PM)/));
    const timeElement = screen.getByText(/\d{1,2}:\d{2}:\d{2} (AM|PM)/);
    expect(timeElement).toBeInTheDocument();
  });
});
