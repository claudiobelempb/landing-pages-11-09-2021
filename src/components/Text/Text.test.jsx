import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Text } from '.';

describe('<Text />', () => {
  it('should render a text', () => {
    renderTheme(<Text>Children</Text>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshots', () => {
    const { container } = renderTheme(<Text>Children</Text>);
    expect(container.firstChild).toMatchInLineSnapshot();
  });
});
