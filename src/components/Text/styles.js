import styled, { css } from 'styled-components';

export const ContainerText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.ms};
  `}
`;
