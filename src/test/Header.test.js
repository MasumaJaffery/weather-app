import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import img from '../images/karbala-header.jpg';

describe('Header component', () => {
  it('renders correctly with image and text', () => {
    const { getByAltText, getByText } = render(<Header />);
    const imageElement = getByAltText('...');
    const titleElement = getByText('Iraq');
    const subtitleElement = getByText('Weather Forecast');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', img);
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
