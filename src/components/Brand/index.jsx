import P from 'prop-types';
import * as Styles from './styles';

export const Brand = ({ title, src = '', link }) => {
  return (
    <a href={link}>
      <Styles.BrandContainer>
        {!!src && <img src={src} alt={title} />}
        {!src && title}
      </Styles.BrandContainer>
    </a>
  );
};

Brand.propTypes = {
  title: P.string.isRequired,
  src: P.string,
  link: P.string.isRequired,
};
