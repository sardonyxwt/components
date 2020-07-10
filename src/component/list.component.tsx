import React from 'react';
import { ChildrenProps, CommonProps } from '@sardonyxwt/ligui';
import {
    ListItemWrapper,
    ListWrapper,
} from '@source/component/list.component.styles';
import { SpacerSize } from '@source/component/layout/spacer.component';

export type ListProps = ChildrenProps &
    CommonProps & {
        spacerSize?: SpacerSize;
    };

export const List: React.FC<ListProps> = (props) => (
    <ListWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        spacerSize={props.spacerSize}
    >
        {props.children}
    </ListWrapper>
);

List.defaultProps = {
    spacerSize: SpacerSize.Medium,
};

export type ListItemProps = ChildrenProps &
    CommonProps & {
        onClick?: () => void;
    };

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
    (props, ref) => (
        <ListItemWrapper
            ref={ref}
            id={props.id}
            style={props.style}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </ListItemWrapper>
    ),
);

ListItem.displayName = 'ListItem';
