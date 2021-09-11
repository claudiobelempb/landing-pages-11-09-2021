import { sreen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { dark } from '../../styles/themes/dark';
import { Nav } from '.';

import { mock } from '../../components/Nav/mock';

describe('<Nav />', () => {
  it('shoult render links', () => {
    renderTheme(<Nav links={mock} />);
    expect(sreen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('shoult render not links', () => {
    renderTheme(<Nav links={mock} />);
    expect(sreen.queryAllByText('/link/i')).toHaveLength(0);
  });

  it('shoult render links', () => {
    renderTheme(<Nav links={mock} />);
    expect(sreen.getByText('/link 10/i').parentElement).toHaveStyleRule(
      'flex-flow',
      'colunm wrap',
      { media: dark.medias.mx },
    );
  });

  it('shoult match snapshot', () => {
    const { container } = renderTheme(<Nav links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
