import styled, { css } from 'styled-components';
import { textFontSizeMixin } from '@source/component/text.component.styles';
import { TextFontSize } from '@source/component/text.component';
import { SimpleListProps } from '@source/component/simple-list.component';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';
import { SpacerSize } from '@source/component/layout/spacer.component';

const DECORATOR_WIDTH = '8px';
const DECORATOR_HEIGHT = '8px';

const simpleListItemTopMixin = (size: TextFontSize) => css`
    calc(${textFontSizeMixin(
        size,
    )} - ${DECORATOR_HEIGHT} - ${DECORATOR_HEIGHT} / 2)
`;

export const SimpleListWrapper = styled.ul<SimpleListProps>``;

export type SimpleListItemProps = {
    size?: TextFontSize;
};

export const SimpleListItem = styled.li<SimpleListItemProps>`
    position: relative;
    padding-left: 20px;
    margin-top: ${spacerSizeMixin(SpacerSize.Small)};

    &:first-child {
        margin-top: 0;
    }

    &:before {
        content: '';
        top: ${({ size }) => simpleListItemTopMixin(size)};
        left: 0;
        width: ${DECORATOR_WIDTH};
        height: ${DECORATOR_HEIGHT};
        border-radius: 50%;
        position: absolute;
        background-color: ${({ theme }) => theme.palette.accent};
    }
`;
