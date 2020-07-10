import styled, { css } from 'styled-components';

export type SidebarWrapperProps = {
    isOpen: boolean;
};

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    position: fixed;
    pointer-events: none;

    ${({ isOpen }) =>
        isOpen &&
        css`
            pointer-events: auto;
            ${SidebarOverlay} {
                opacity: 1;
            }
            ${SidebarContent} {
                transform: translateX(0);
            }
        `}
`;

export const SidebarOverlay = styled.div`
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.palette.shadow};
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.3s;
    outline: none;
    -webkit-tap-highlight-color: transparent;
`;

export const SidebarContent = styled.div`
    width: 300px;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.block};
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 0.3s;
`;

export type SidebarFooterWrapperProps = {
    isPushToBottom: boolean;
};

export const SidebarFooterWrapper = styled.div<SidebarFooterWrapperProps>`
    ${({ isPushToBottom }) =>
        isPushToBottom &&
        css`
            bottom: 0;
            position: absolute;
        `}
`;
