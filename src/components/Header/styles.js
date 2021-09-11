import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    background: ${theme.colors.primary};

    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;
