import styled, { css } from 'styled-components';
import {
    ToolbarItemProps,
    ToolbarProps,
} from '@source/component/layout/toolbar.component';

export type ToolbarWrapperProps = ToolbarProps;

export const ToolbarWrapper = styled.div<ToolbarWrapperProps>`
    width: 100%;
    box-sizing: border-box;
    transition: background-color 1s;
    background-color: ${({ theme }) => theme.palette.root};

    ${({ useTransparentBackground, theme }) =>
        useTransparentBackground &&
        css`
            background-color: ${theme.palette.shadow};
        `};

    ${({ useFullTransparentBackground }) =>
        useFullTransparentBackground &&
        css`
            background-color: transparent;
        `};

    ${({ isStuck }) =>
        isStuck &&
        css`
            top: 0;
            z-index: 100;
            position: sticky;
        `};
`;

export const ToolbarRowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export type ToolbarItemWrapperProps = ToolbarItemProps;

export const ToolbarItemWrapper = styled.div<ToolbarItemWrapperProps>`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;

    ${({ isExpandable }) =>
        isExpandable &&
        css`
            flex: 1;
        `};

    &:last-child {
        justify-content: flex-end;
    }

    &:first-child {
        justify-content: flex-start;
    }
`;
