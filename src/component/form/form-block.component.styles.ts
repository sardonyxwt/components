import styled from 'styled-components';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';
import { SpacerSize } from '@source/component/layout/spacer.component';

const mediumOffset = spacerSizeMixin(SpacerSize.Medium);

export const FormBlockWrapper = styled.div`
    border-radius: 16px;
    box-sizing: border-box;
    position: absolute;
    margin: ${mediumOffset} auto;
    padding: ${mediumOffset} ${mediumOffset} 0;
    width: 360px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.block};
`;
