import React from 'react';
import { lorem } from 'faker';
import { SimpleList } from '@source';

export default {
    title: 'SimpleList',
    component: SimpleList,
};

const simpleListItems = lorem.paragraphs(10, ',').split(',');

export const simpleList = (): React.ReactNode => (
    <SimpleList items={simpleListItems} />
);
