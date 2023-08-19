import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  it('displays the correct content', () => {
    const { getByRole } = render(<Footer />);

    const githubLink = getByRole('link', { name: '@MasumaJaffery' });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/MasumaJaffery');
  });
});
