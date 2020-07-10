import React from 'react';
import { Text } from '@source/component/text.component';
import { ExampleWrapper } from '@source/component/example.component.styles';

export type ExampleProps = {
    object?: string;
    useReversColor?: boolean;
};

export const Example: React.FC<ExampleProps> = (props) => {
    return (
        <ExampleWrapper useReversColor={props.useReversColor}>
            <Text>Hello {props.object}!</Text>
        </ExampleWrapper>
    );
};

Example.defaultProps = {
    object: 'World',
    useReversColor: false,
};

Example.displayName = 'Example';
