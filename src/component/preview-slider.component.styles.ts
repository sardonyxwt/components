import styled from 'styled-components';
import { Video } from '@source/component/video.component';

export const PreviewSliderWrapper = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`;

export const PreviewSliderContainer = styled.div`
    display: inline-flex;
`;

export const PreviewSliderVideo = styled(Video)`
    border-radius: 50%;
    width: 164px;
    height: 164px;
    background-color: ${({ theme }) => theme.palette.element};
`;
