import styled from 'styled-components';
import { SpacerSize } from '@source/component/layout/spacer.component';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';

export type ListWrapperProps = {
    spacerSize: SpacerSize;
};

export const ListWrapper = styled.ul<ListWrapperProps>`
    list-style: none;
    margin: 0;
    padding: 0;
    ${() => ListItemWrapper} {
        padding: ${({ spacerSize }) => spacerSizeMixin(spacerSize)} 0;
    }
`;

export const ListItemWrapper = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
`;
