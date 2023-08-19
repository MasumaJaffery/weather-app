import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('renders correctly with navigation links', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const todayWeatherLink = getByText("Today's Weather");
    expect(todayWeatherLink).toBeInTheDocument();
  });
});
