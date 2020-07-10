import styled, { css } from 'styled-components';

export const MODAL_ANIMATION_TIME = 600;

export type ModalOverlayProps = {
    isOpen?: boolean;
    isFullscreen?: boolean;
    useMinimizedContent?: boolean;
};

export const ModalOverlay = styled.div<ModalOverlayProps>`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    outline: none;
    opacity: 0;
    padding: 16px;
    box-sizing: border-box;
    pointer-events: none;
    transition: opacity ${MODAL_ANIMATION_TIME}ms;
    background-color: ${({ theme }) => theme.palette.shadow};

    ${({ useMinimizedContent }) =>
        useMinimizedContent &&
        css`
            display: flex;
        `};

    ${({ isOpen }) =>
        isOpen &&
        css`
            pointer-events: auto;
            opacity: 1;
        `};

    ${({ isFullscreen }) =>
        isFullscreen &&
        css`
            padding: 0;
            box-sizing: inherit;
        `};
`;

export type ModalWrapperProps = ModalOverlayProps;

export const ModalWrapper = styled.div<ModalWrapperProps>`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: ${({ theme }) => theme.palette.block};
    box-sizing: border-box;
    transform: translateY(-10%);
    transition-duration: ${MODAL_ANIMATION_TIME}ms;
    transition-property: transform;
    border-radius: 16px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);

    ${({ useMinimizedContent }) =>
        useMinimizedContent &&
        css`
            display: flex;
            flex-direction: column;
            align-self: center;
            height: auto;
            max-height: 100%;
        `};

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: translateY(0);
        `};

    ${({ isFullscreen, theme }) =>
        isFullscreen &&
        css`
            border-radius: 0;
            box-shadow: none;
            background: ${theme.palette.root};
        `};
`;
