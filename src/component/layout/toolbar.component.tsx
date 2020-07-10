import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { Container } from '@source/component/layout/container.component';
import {
    ToolbarItemWrapper,
    ToolbarRowWrapper,
    ToolbarWrapper,
} from '@source/component/layout/toolbar.component.styles';

export type ToolbarProps = CommonProps & {
    isStuck?: boolean;
    useTransparentBackground?: boolean;
    useFullTransparentBackground?: boolean;
};

export const Toolbar: React.FC<ToolbarProps> = (props) => (
    <ToolbarWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        isStuck={props.isStuck}
        useTransparentBackground={props.useTransparentBackground}
        useFullTransparentBackground={props.useFullTransparentBackground}
    >
        <Container>{props.children}</Container>
    </ToolbarWrapper>
);

export type ToolbarRowProps = CommonProps;

export const ToolbarRow: React.FC<ToolbarRowProps> = (props) => (
    <ToolbarRowWrapper
        id={props.id}
        style={props.style}
        className={props.className}
    >
        {props.children}
    </ToolbarRowWrapper>
);

export type ToolbarItemProps = CommonProps & {
    isExpandable?: boolean;
};

export const ToolbarItem: React.FC<ToolbarItemProps> = (props) => (
    <ToolbarItemWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        isExpandable={props.isExpandable}
    >
        {props.children}
    </ToolbarItemWrapper>
);
