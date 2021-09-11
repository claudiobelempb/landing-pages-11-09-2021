import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { dark } from '../../styles/themes/dark';
import { Heading } from '../Heading';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: dark.colors.white,
      'font-size': dark.fonts.sizes.lx,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading isColor>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: dark.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size={'lx'}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': dark.fonts.sizes.lx,
    });
  });
});
