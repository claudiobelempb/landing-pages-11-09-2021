import styled, { css } from 'styled-components';

const titleSize = {
  lx: (theme) => css`
    font-size: ${theme.fonts.sizes.lx};
  `,
  mx: (theme) => css`
    font-size: ${theme.fonts.sizes.mx};
  `,
  sx: (theme) => css`
    font-size: ${theme.fonts.sizes.sx};
  `,
  ls: (theme) => css`
    font-size: ${theme.fonts.sizes.ls};
  `,
  ms: (theme) => css`
    font-size: ${theme.fonts.sizes.ms};
  `,
  ss: (theme) => css`
    font-size: ${theme.fonts.sizes.ss};
  `,
};

const titleUppercase = (isUppercase) => css`
  text-transform: ${isUppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, isColor, size, isUppercase }) => css`
    color: ${isColor ? theme.colors.white : false};
    ${titleSize[size](theme)};
    ${titleUppercase(isUppercase)};
  `}
`;
