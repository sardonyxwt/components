import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { Switch } from '@source';

export default {
    title: '@form/Switch',
    component: Switch,
};

export const switchOn = (): React.ReactNode => (
    <Switch isChecked={boolean('isChecked', true)} />
);

export const switchOff = (): React.ReactNode => <Switch isChecked={false} />;
