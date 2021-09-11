import styled, { css } from 'styled-components';

export const BrandContainer = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;

    & img {
      max-height: 2.5rem;
    }

    @media only screen and ${theme.medias.mx} {
      display: none;
    }
  `}
`;
