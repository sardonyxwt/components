import styled, { css } from 'styled-components';
import {
    SpacerProps,
    SpacerSize,
    SpacerType,
} from '@source/component/layout/spacer.component';

export const spacerSizeMixin = (size = SpacerSize.Medium): string =>
    ({
        [SpacerSize.Small]: '8px',
        [SpacerSize.Medium]: '16px',
        [SpacerSize.Large]: '24px',
    }[size]);

export type SpacerWrapperProps = SpacerProps;

export const SpacerWrapper = styled.span<SpacerWrapperProps>`
    flex: none;
    ${({ type, size }) =>
        ({
            [SpacerType.Vertical]: css`
                display: block;
                width: 100%;
                padding-top: ${spacerSizeMixin(size)};
            `,
            [SpacerType.Horizontal]: css`
                display: inline-block;
                padding-left: ${spacerSizeMixin(size)};
            `,
        }[type])}
`;
