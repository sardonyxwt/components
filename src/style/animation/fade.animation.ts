import { css, FlattenSimpleInterpolation } from 'styled-components';
import {
    ENTERED,
    ENTERING,
    EXITED,
    EXITING,
    TransitionStatus,
} from 'react-transition-group/Transition';

const fadeAnimationOpacityMixin = (status: TransitionStatus) => {
    switch (status) {
        case ENTERED:
        case ENTERING:
            return 1;
        case EXITING:
        case EXITED:
            return 0.01;
    }
};

export const fadeAnimationMixin = (
    status: TransitionStatus,
    timeout = 500,
): FlattenSimpleInterpolation => css`
    transition: opacity ${timeout}ms ease-in;
    opacity: ${fadeAnimationOpacityMixin(status)};
`;
