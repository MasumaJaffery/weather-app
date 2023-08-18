import React from 'react';
import { render } from '@testing-library/react';
import Datee from '../components/Date';

describe('Datee component', () => {
  it('displays the current date in the correct format', () => {
    const { getByText } = render(<Datee />);

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const expectedDateText = `${currentMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    const dateElement = getByText(expectedDateText);

    expect(dateElement).toBeInTheDocument();
  });
});
