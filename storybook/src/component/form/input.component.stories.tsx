import React from 'react';
import { Input, InputProps } from '@source';

export default {
    title: '@form/Input',
    component: Input,
};

const InputStory: React.FC<Partial<InputProps>> = (props) => {
    const [value, setValue] = React.useState('');

    return (
        <Input
            value={value}
            label={props.label}
            isOptional={props.isOptional}
            isPassword={props.isPassword}
            onChange={(value) => setValue(value)}
        />
    );
};

export const input = (): React.ReactNode => <InputStory label="Full name" />;

export const passwordInput = (): React.ReactNode => (
    <InputStory isPassword label="Password" />
);

export const optionalInput = (): React.ReactNode => (
    <InputStory label="Full name" isOptional />
);
