import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from '../components/Search';

test('renders input field with placeholder', () => {
  const mockOnChange = jest.fn();

  render(<SearchFilter value="" onChange={mockOnChange} />);

  const inputElement = screen.getByPlaceholderText('Search province...');
  expect(inputElement).toBeInTheDocument();
});

test('invokes onChange callback when input value changes', () => {
  const mockOnChange = jest.fn();

  render(<SearchFilter value="" onChange={mockOnChange} />);

  const inputElement = screen.getByPlaceholderText('Search province...');

  fireEvent.change(inputElement, { target: { value: 'Baghdad' } });
  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));

  fireEvent.change(inputElement, { target: { value: 'Erbil' } });
  expect(mockOnChange).toHaveBeenCalledTimes(2);
  expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
});
