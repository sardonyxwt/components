import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { Example } from '@source';

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
