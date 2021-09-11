import P from 'prop-types';
import * as styled from './style';

export const Heading = ({
  children,
  isColor = true,
  as = 'h1',
  size = 'lx',
  isUppercase = false,
}) => {
  return (
    <styled.Title
      isColor={isColor}
      as={as}
      size={size}
      isUppercase={isUppercase}
    >
      {children}
    </styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['lx', 'mx', 'sx', 'ls', 'ms', 'ss']),
  isColor: P.bool,
  isUppercase: P.bool,
};
