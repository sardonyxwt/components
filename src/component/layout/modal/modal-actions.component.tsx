import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { Buttons } from '@source/component/form/button.component';

export type ModalActionsProps = CommonProps;

export const ModalActions: React.FC<ModalActionsProps> = (props) => (
    <Buttons
        id={props.id}
        style={props.style}
        className={props.className}
        isSticky
        isPushedBottom
    >
        {props.children}
    </Buttons>
);
