import styled, { css } from 'styled-components';
import { List } from '@source/component/list.component';
import { SpacerSize } from '@source/component/layout/spacer.component';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';

export const LanguageSelectWrapper = styled.div`
    display: inline-block;
`;

export type LanguageSelectDropdownWrapperProps = {
    top: number;
    left: number;
};

const DROPDOWN_PADDING = spacerSizeMixin(SpacerSize.Small);

export const LanguageSelectDropdownWrapper = styled(List).attrs({
    spacerSize: SpacerSize.Small,
})<LanguageSelectDropdownWrapperProps>`
    z-index: 999;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.element};
    border-radius: 1000px;
    padding: 0 ${DROPDOWN_PADDING};
    ${({ top, left }) => css`
        top: calc(${top}px - ${DROPDOWN_PADDING});
        left: calc(${left}px - ${DROPDOWN_PADDING});
    `}
`;
