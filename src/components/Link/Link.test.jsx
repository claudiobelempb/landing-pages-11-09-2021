import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Link } from '.';

describe('shoult render a link', () => {
  renderTheme(<Link link={'/'}>Children</Link>);
  expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
});
