import styled, { css } from 'styled-components';
import {
    Text,
    TextColor,
    TextFamily,
    TextFontSize,
} from '@source/component/text.component';
import { Container } from '@source/component/layout/container.component';

export type FooterWrapper = {
    isReady?: boolean;
    isPushedBottom?: boolean;
};

export const FooterWrapper = styled(Container)<FooterWrapper>`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({ isReady }) => (isReady ? '1' : '0')};

    ${({ theme }) => css`
        background-color: ${theme.palette.block};
    `};

    ${({ isPushedBottom }) =>
        isPushedBottom &&
        css`
            bottom: 0;
            position: fixed;
        `};
`;

export const FooterCopyright = styled(Text).attrs(() => ({
    family: TextFamily.Nunito,
    fontSize: TextFontSize.S,
    color: TextColor.Label,
}))`
    text-align: center;
`;
