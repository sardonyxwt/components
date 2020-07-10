import React from 'react';
import { lorem } from 'faker';
import { Text, List, ListItem } from '@source';

export default {
    title: 'List',
    component: List,
};

const listItems = lorem.words(10).split(',');

export const list = (): React.ReactNode => (
    <List>
        {listItems.map((value, index) => (
            <ListItem key={index}>
                <Text>
                    <b>{value}</b>
                </Text>
            </ListItem>
        ))}
    </List>
);
