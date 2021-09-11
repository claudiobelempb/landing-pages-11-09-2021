import P from 'prop-types';
import * as Styles from './styles';

export const Link = ({ title, link, target }) => {
  const aba = target ? '_blank' : '_self';
  return (
    <Styles.LinkContainer href={link} target={aba}>
      {title}
    </Styles.LinkContainer>
  );
};

Link.propTypes = {
  title: P.string.isRequired,
  link: P.string.isRequired,
  target: P.bool,
};
