import P from 'prop-types';
import * as Styles from './styles';

export const Text = ({ children }) => {
  return <Styles.ContainerText>{children}</Styles.ContainerText>;
};

Text.propTypes = {
  children: P.node.isRequired,
};
