import React from 'react';
import { CommonProps, useRef } from '@sardonyxwt/ligui';
import { useStickyBottom } from '@source/hook/sticky-bottom.hook';
import {
    ButtonsWrapper,
    ButtonsContent,
    ButtonWrapper,
} from '@source/component/form/button.component.styles';

export type ButtonProps = CommonProps & {
    type?: 'submit' | 'reset' | 'button';
    form?: string;
    isPrimary?: boolean;
    useAllAvailableSpace?: boolean;
    useFabStyle?: boolean;
    ariaLabel?: string;
    onClick?: React.MouseEventHandler;
};

export const Button: React.FC<ButtonProps> = (props) => (
    <ButtonWrapper
        id={props.id}
        style={props.style}
        form={props.form}
        type={props.type}
        className={props.className}
        isPrimary={props.isPrimary}
        useFabStyle={props.useFabStyle}
        useAllAvailableSpace={props.useAllAvailableSpace}
        aria-label={props.ariaLabel}
        onClick={props.onClick}
        onTouchStart={props.onClick ? () => null : null}
    >
        {props.children}
    </ButtonWrapper>
);

export type ButtonsProps = CommonProps & {
    isSticky?: boolean;
    isPushedBottom?: boolean;
    direction?: 'row' | 'column';
};

export const Buttons: React.FC<ButtonsProps> = (props) => {
    const buttonFabContainerRef = useRef<HTMLDivElement>();

    const isPushedBottom = useStickyBottom(
        buttonFabContainerRef.current,
        props.isPushedBottom,
    );

    return (
        <ButtonsWrapper
            ref={buttonFabContainerRef}
            id={props.id}
            style={props.style}
            className={props.className}
            isSticky={props.isSticky}
            isPushedBottom={isPushedBottom}
        >
            <ButtonsContent direction={props.direction}>
                {props.children}
            </ButtonsContent>
        </ButtonsWrapper>
    );
};

Buttons.defaultProps = {
    direction: 'row',
};
