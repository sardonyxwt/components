import styled, { css } from 'styled-components';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';
import { SpacerSize } from '@source/component/layout/spacer.component';

export type ButtonWrapperProps = {
    isPrimary: boolean;
    useFabStyle: boolean;
    useAllAvailableSpace: boolean;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 46px;
    min-height: 46px;
    border-radius: 1000px;
    padding: 0 23px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.element};
    transition: transform 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:active {
        transform: scale(0.95);
    }

    & > * {
        margin-left: ${spacerSizeMixin(SpacerSize.Small)};
    }

    & > *:first-child {
        margin-left: 0;
    }

    ${({ isPrimary, theme }) =>
        isPrimary &&
        css`
            background-color: ${theme.palette.accent};
        `};

    ${({ useAllAvailableSpace }) =>
        useAllAvailableSpace &&
        css`
            width: 100%;
        `};

    ${({ useFabStyle }) =>
        useFabStyle &&
        css`
            padding: 0;
        `};
`;

export type ButtonsWrapperProps = {
    isSticky: boolean;
    isPushedBottom: boolean;
};

export const ButtonsWrapper = styled.div<ButtonsWrapperProps>`
    width: 100%;
    box-sizing: border-box;

    ${({ isSticky }) =>
        isSticky &&
        css`
            bottom: 0;
            position: sticky;
        `}

    ${({ isPushedBottom }) =>
        isPushedBottom &&
        css`
            left: 0;
            bottom: 0;
            position: absolute;
        `}
`;

export type ButtonsContentProps = {
    direction: 'row' | 'column';
};

export const ButtonsContent = styled.div<ButtonsContentProps>`
    display: flex;
    padding: ${spacerSizeMixin()} 0;

    & > * {
        outline-color: transparent;
    }

    & ${ButtonWrapper} {
        box-shadow: 0 12px 16px -12px rgb(0, 0, 0);
    }

    & > *:first-child {
        margin-left: 0;
        margin-top: 0;
    }

    ${({ direction }) =>
        ({
            ['row']: css`
                flex-direction: row;
                justify-content: center;
                & > * {
                    margin-left: ${spacerSizeMixin()};
                }
            `,
            ['column']: css`
                flex-direction: column;
                align-items: center;
                & > * {
                    margin-top: ${spacerSizeMixin()};
                }
            `,
        }[direction])}
`;
