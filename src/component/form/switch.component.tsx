import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    SwitchCheckbox,
    SwitchSlider,
    SwitchWrapper,
} from '@source/component/form/switch.component.styles';

export type SwitchProps = CommonProps & {
    isChecked?: boolean;
    onClick?: () => void;
};

export const Switch: React.FC<SwitchProps> = (props) => (
    <SwitchWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        onClick={props.onClick}
    >
        <SwitchSlider isChecked={props.isChecked} />
        <SwitchCheckbox isChecked={props.isChecked} />
    </SwitchWrapper>
);
