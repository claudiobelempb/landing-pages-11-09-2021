import * as Styles from './styles';

import { Brand } from '../Brand';
import { Nav } from '../Nav';
import ImgLogo from '../../assets/img/logo.svg';
import { mock } from '../../components/Nav/mock';

export const Header = () => {
  return (
    <div className={`container`}>
      <div className={`content`}>
        <Styles.HeaderContainer>
          <Brand title={'Brand'} src={ImgLogo} link={'/'} />
          <Nav links={mock} />
        </Styles.HeaderContainer>
      </div>
    </div>
  );
};
