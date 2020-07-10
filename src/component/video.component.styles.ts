import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group/Transition';
import { fadeAnimationMixin } from '@source/style/animation/fade.animation';

export const VIDEO_ANIMATION_TIMEOUT = 300;

export type VideoWrapperProps = {
    status?: TransitionStatus;
};

export const VideoWrapper = styled.div<VideoWrapperProps>`
    width: inherit;
    height: inherit;
    overflow: inherit;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.palette.element};
    ${() => VideoSource} {
        ${({ status }) => fadeAnimationMixin(status, VIDEO_ANIMATION_TIMEOUT)};
    }
`;

export const VideoSource = styled.video<VideoWrapperProps>`
    width: inherit;
    height: inherit;
    overflow: inherit;
    border-radius: inherit;
    object-fit: cover;
    object-position: top;
`;
