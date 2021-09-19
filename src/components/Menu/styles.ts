import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
  `}
`;
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    > div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;