import * as React from 'react';
import { ExampleWrapper } from '@source/component/example.component.styles';

export type ExampleProps = {
    object?: string;
    useReversColor?: boolean;
};

export const Example: React.FC<ExampleProps> = (props) => {
    return <ExampleWrapper useReversColor={props.useReversColor}>Hello {props.object}!</ExampleWrapper>;
};

Example.defaultProps = {
    object: 'World',
    useReversColor: false,
};

Example.displayName = 'Example';
