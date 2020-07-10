import styled, { css } from 'styled-components';
import { TransitionStatus } from 'react-transition-group/Transition';
import { fadeAnimationMixin } from '@source/style/animation/fade.animation';

export const IMAGE_ANIMATION_TIMEOUT = 300;

export type ImageWrapperProps = {
    status?: TransitionStatus;
    width?: number | string;
    height?: number | string;
    isError?: boolean;
    useRatio?: boolean;
    usePreviewBackground?: boolean;
};

const imageSizeMixin = (width: number, height: number, isError: boolean) => {
    if (!width || !height || isError) {
        return null;
    }
    return css`
        position: relative;
        padding-top: ${(100 * height) / width}%;
        padding-left: 100%;
        ${() => ImageSource} {
            top: 0;
            left: 0;
            position: absolute;
        }
    `;
};

export const ImageWrapper = styled.div<ImageWrapperProps>`
    width: inherit;
    height: inherit;
    overflow: hidden;
    display: inline-block;
    ${({ usePreviewBackground, theme }) =>
        usePreviewBackground &&
        css`
            background-color: ${theme.palette.element};
        `};
    ${({ useRatio, width }) =>
        !useRatio &&
        width &&
        css`
            width: ${width};
        `};
    ${({ useRatio, height }) =>
        !useRatio &&
        height &&
        css`
            height: ${height};
        `};
    ${({ useRatio, width, height, isError }) =>
        useRatio &&
        imageSizeMixin(
            parseInt(width as string, 10),
            parseInt(height as string, 10),
            isError,
        )};
    ${() => ImageSource} {
        ${({ status }) => fadeAnimationMixin(status, IMAGE_ANIMATION_TIMEOUT)};
    }
`;

export const ImageSource = styled.img`
    width: 100%;
    height: 100%;
    overflow: inherit;
    border-radius: inherit;
    object-fit: contain;
    object-position: center;
    display: inline-block;
`;
