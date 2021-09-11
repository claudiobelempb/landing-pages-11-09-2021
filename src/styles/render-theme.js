import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { dark } from '../../src/styles/themes/dark';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={dark}>{children}</ThemeProvider>);
};
