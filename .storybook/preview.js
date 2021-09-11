import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { light } from '../src/styles/themes/light';
import { dark } from '../src/styles/themes/dark';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: light.colors.primary,
      },
      {
        name: 'dark',
        value: dark.colors.primary,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={light}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
