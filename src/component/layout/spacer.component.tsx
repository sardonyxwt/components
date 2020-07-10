import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { SpacerWrapper } from '@source/component/layout/spacer.component.styles';

export enum SpacerSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export enum SpacerType {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

export type SpacerProps = CommonProps & {
    size?: SpacerSize;
    type?: SpacerType;
};

export const Spacer: React.FC<SpacerProps> = (props) => {
    return (
        <SpacerWrapper
            id={props.id}
            style={props.style}
            className={props.className}
            type={props.type}
            size={props.size}
        />
    );
};

Spacer.defaultProps = {
    type: SpacerType.Vertical,
    size: SpacerSize.Medium,
};
