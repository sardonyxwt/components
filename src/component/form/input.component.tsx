import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    InnerInput,
    InnerTextarea,
    InputError,
    InputLabel,
    InputOptionalFlag,
    InputWrapper,
} from '@source/component/form/input.component.styles';

export type InputProps = CommonProps & {
    name?: string;
    value?: string;
    label?: string;
    error?: string;
    optionalLabel?: string;
    rows?: number;
    isOptional?: boolean;
    isPassword?: boolean;
    isInvalid?: boolean;
    useTextareaDesign?: boolean;
    onChange?: (newValue: string, oldValue: string) => void;
};

export const Input = React.forwardRef<
    HTMLTextAreaElement | HTMLInputElement,
    InputProps
>((props, ref) => {
    const { value, label, optionalLabel, isOptional } = props;

    const inputField = React.useMemo(
        () =>
            props.useTextareaDesign ? (
                <InnerTextarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    value={value}
                    name={props.name}
                    rows={props.rows}
                    onChange={(evt) =>
                        props.onChange?.(evt.target.value, value)
                    }
                />
            ) : (
                <InnerInput
                    ref={ref as React.Ref<HTMLInputElement>}
                    value={value}
                    name={props.name}
                    type={props.isPassword ? 'password' : 'text'}
                    onChange={(evt) =>
                        props.onChange?.(evt.target.value, value)
                    }
                />
            ),
        [props.useTextareaDesign],
    );

    return (
        <InputWrapper
            id={props.id}
            style={props.style}
            className={props.className}
            isError={!!props.error}
        >
            {inputField}
            {(label || isOptional) && (
                <InputLabel>
                    {label}
                    {isOptional && (
                        <InputOptionalFlag>
                            {label ? ` - ${optionalLabel}` : optionalLabel}
                        </InputOptionalFlag>
                    )}
                </InputLabel>
            )}
            {props.error && <InputError>{props.error}</InputError>}
        </InputWrapper>
    );
});

Input.displayName = 'Input';

Input.defaultProps = {
    rows: 4,
    optionalLabel: 'Optional',
};
