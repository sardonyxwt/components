import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    Toolbar,
    ToolbarRow,
    ToolbarItem,
} from '@source/component/layout/toolbar.component';

export enum HeaderChildrenPosition {
    Left = 'left',
    Center = 'center',
    Right = 'right',
}

export type HeaderProps = CommonProps & {
    before?: React.ReactElement;
    after?: React.ReactElement;
    childrenPosition?: HeaderChildrenPosition;
    isStuck?: boolean;
    useTransparentBackground?: boolean;
};

export const Header: React.FC<HeaderProps> = (props) => (
    <Toolbar
        id={props.id}
        style={props.style}
        className={props.className}
        isStuck={props.isStuck}
        useTransparentBackground={props.useTransparentBackground}
    >
        <ToolbarRow>
            <ToolbarItem
                isExpandable={
                    props.childrenPosition !== HeaderChildrenPosition.Left
                }
            >
                {props.before}
            </ToolbarItem>
            <ToolbarItem
                isExpandable={
                    props.childrenPosition === HeaderChildrenPosition.Center
                }
            >
                {props.children}
            </ToolbarItem>
            <ToolbarItem
                isExpandable={
                    props.childrenPosition !== HeaderChildrenPosition.Right
                }
            >
                {props.after}
            </ToolbarItem>
        </ToolbarRow>
    </Toolbar>
);

Header.defaultProps = {
    childrenPosition: HeaderChildrenPosition.Center,
};
