import styled, { keyframes } from 'styled-components';

const tutorialOverlayInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const TutorialCaseOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    animation-name: ${tutorialOverlayInAnimation};
    animation-duration: 0.3s;
    background-color: rgba(5, 6, 10, 0.5);
`;
