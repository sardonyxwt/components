import styled from 'styled-components';

export type ExampleWrapperProps = {
    useReversColor?: boolean;
};

export const ExampleWrapper = styled.div<ExampleWrapperProps>`
    color: ${({ theme, useReversColor }) =>
        useReversColor ? theme.palette.main : theme.palette.accent};
`;

ExampleWrapper.displayName = 'ExampleWrapper';
