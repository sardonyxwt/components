import * as React from 'react';
import { Example } from '@source';
import { boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Example',
    component: Example,
};

export const example = (): React.ReactNode => (
    <Example
        object={text('object', 'Storybook')}
        useReversColor={boolean('useReversColor', false)}
    />
);
