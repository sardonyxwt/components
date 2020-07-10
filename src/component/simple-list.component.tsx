import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { Text, TextFontSize } from '@source/component/text.component';
import {
    SimpleListItem,
    SimpleListWrapper,
} from '@source/component/simple-list.component.styles';

export type SimpleListProps = CommonProps & {
    items?: string[];
    size?: TextFontSize;
};

export const SimpleList: React.FC<SimpleListProps> = (props) => {
    if (props.items.length === 0) {
        return null;
    }
    return (
        <SimpleListWrapper
            id={props.id}
            style={props.style}
            className={props.className}
        >
            {props.items.map((item) => (
                <SimpleListItem key={item} size={props.size}>
                    <Text fontSize={props.size}>{item}</Text>
                </SimpleListItem>
            ))}
        </SimpleListWrapper>
    );
};

SimpleList.defaultProps = {
    items: [],
    size: TextFontSize.S,
};
