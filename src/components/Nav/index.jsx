import P from 'prop-types';
import * as Styles from './styles';
import { Link } from '../Link';

export const Nav = ({ links = [] }) => {
  return (
    <Styles.NavContainer>
      {links.map((link) => {
        console.log(link);
        return <Link key={link.link} {...link} />;
      })}
    </Styles.NavContainer>
  );
};

Nav.propTypes = {
  links: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      link: P.string.isRequired,
      target: P.bool,
    }),
  ),
};
