import styled, { css } from 'styled-components';
import { Container } from '@source/component/layout/container.component';

export type ModalContentWrapperProps = {
    useAllContentAvailableSpace?: boolean;
};

export const ModalContentWrapper = styled(Container)<ModalContentWrapperProps>`
    ${({ useAllContentAvailableSpace }) =>
        useAllContentAvailableSpace &&
        css`
            padding: 0;
        `}
`;

export type ModalContentContainerProps = {
    useCentering?: boolean;
};

export const ModalContentContainer = styled.div<ModalContentContainerProps>`
    height: inherit;

    ${({ useCentering }) =>
        useCentering &&
        css`
            display: flex;
            flex-direction: column;
            align-items: center;
        `}
`;
