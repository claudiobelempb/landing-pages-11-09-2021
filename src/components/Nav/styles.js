import styled, { css } from 'styled-components';

export const NavContainer = styled.nav`
  ${({ theme }) => css`
    display: flex;

    align-items: center;
    flex-flow: row wrap;
    color: ${theme.colors.white};
    /* background-color: ${theme.colors.white}; */

    @media only screen and ${theme.medias.mx} {
      flex-flow: column nowrap;
      align-content: center;
    }
  `}
`;
