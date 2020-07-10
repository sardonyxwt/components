import React from 'react';
import { lorem } from 'faker';
import { Text, Container } from '@source';

export default {
    title: '@layout/Container',
    component: Container,
};

const paragraphs = lorem
    .paragraphs(10, ',')
    .split(',')
    .map((paragraph, i) => (
        <Text key={i}>
            <br />
            <p>{paragraph}</p>
        </Text>
    ));

export const container = (): React.ReactNode => (
    <Container>{paragraphs}</Container>
);
