import styled, { keyframes } from 'styled-components';

export const PRELOADER_TRANSITION_DELAY = 1000;
export const PRELOADER_TRANSITION_DURATION = 1000;

export type PreloaderWrapperProps = {
    isActive: boolean;
};

export const PreloaderWrapper = styled.section<PreloaderWrapperProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition-property: opacity;
    transition-duration: ${PRELOADER_TRANSITION_DURATION}ms;
    transition-delay: ${PRELOADER_TRANSITION_DELAY}ms;
    background-color: rgba(24, 24, 24, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
`;

export const PreloaderArea = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    margin: auto;
`;

export const preloaderCircleKeyframes = keyframes`
    0%,
    100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
`;

export const PreloaderCircle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.accent};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${preloaderCircleKeyframes} 2s infinite ease-in-out;

    &:nth-child(1) {
        animation-delay: -1s;
    }
`;
