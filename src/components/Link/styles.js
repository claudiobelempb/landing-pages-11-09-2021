import styled, { css } from 'styled-components';

export const LinkContainer = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.ms};
    padding: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background: ${theme.colors.warning};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
