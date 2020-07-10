import styled from 'styled-components';
import { Image } from '@source/component/image.component';
import { Buttons } from '@source/component/form/button.component';
import { Container } from '@source/component/layout/container.component';

export const CardWrapper = styled.div`
    overflow: hidden;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.palette.element};
`;

export const CardPreviewWrapper = styled(Image).attrs({
    useLazyLoading: true,
    usePreviewBackground: true,
})`
    overflow: hidden;
    border-radius: 16px;
`;

export const CardContentWrapper = styled(Container)``;

export const CardActionsWrapper = styled(Buttons)``;
