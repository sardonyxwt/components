import styled from 'styled-components';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';
import { SpacerSize } from '@source/component/layout/spacer.component';

export const CountdownWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 300px;
`;

export const CountdownItem = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    margin-left: ${spacerSizeMixin(SpacerSize.Small)};
    border-radius: 10px;
    border: solid 2px ${({ theme }) => theme.palette.accent};
    &:first-child {
        margin-left: 0;
    }
`;
