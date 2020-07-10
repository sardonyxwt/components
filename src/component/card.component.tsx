import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    CardActionsWrapper,
    CardContentWrapper,
    CardPreviewWrapper,
    CardWrapper,
} from '@source/component/card.component.styles';
import { Spacer } from '@source/component/layout/spacer.component';

export type CardProps = CommonProps & {
    onClick?: () => void;
};

export const Card: React.FC<CardProps> = (props) => {
    return (
        <CardWrapper
            id={props.id}
            style={props.style}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </CardWrapper>
    );
};

export type CardPreviewProps = {
    src: string;
    width?: number;
    height?: number;
    onClick?: () => void;
};

export const CardPreview: React.FC<CardPreviewProps> = (props) => {
    return (
        <CardPreviewWrapper
            src={props.src}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
        />
    );
};

export const CardContent: React.FC = (props) => {
    return (
        <CardContentWrapper>
            <Spacer />
            {props.children}
        </CardContentWrapper>
    );
};

export const CardActions: React.FC = (props) => {
    return <CardActionsWrapper>{props.children}</CardActionsWrapper>;
};
