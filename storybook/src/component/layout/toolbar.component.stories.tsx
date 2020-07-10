import React from 'react';
import styled from 'styled-components';
import { lorem } from 'faker';
import {
    Toolbar,
    ToolbarRow,
    ToolbarItem,
    ToolbarProps,
    Text,
    Container,
} from '@source';

const ToolbarStoryWrapper = styled.div`
    height: 300px;
    overflow-y: auto;
`;

export default {
    title: '@layout/Toolbar',
    component: Toolbar,
};

const paragraphs = lorem
    .paragraphs(10, ',')
    .split(',')
    .map((paragraph) => (
        <Text key={paragraph}>
            <br />
            <b>{paragraph}</b>
        </Text>
    ));

const renderToolbarStory = (props: ToolbarProps) => (
    <ToolbarStoryWrapper>
        <Container>
            <Text>
                <b>Before toolbar</b>
            </Text>
        </Container>
        <Toolbar {...props}>
            <ToolbarRow>
                <ToolbarItem>
                    <Text>
                        <b>Toolbar</b>
                    </Text>
                </ToolbarItem>
            </ToolbarRow>
        </Toolbar>
        <Container>{paragraphs}</Container>
    </ToolbarStoryWrapper>
);

export const toolbar = (): React.ReactNode => renderToolbarStory({});

export const stuckToolbar = (): React.ReactNode =>
    renderToolbarStory({
        isStuck: true,
    });

export const transparentStuckToolbar = (): React.ReactNode =>
    renderToolbarStory({
        isStuck: true,
        useTransparentBackground: true,
    });

export const fullTransparentStuckToolbar = (): React.ReactNode =>
    renderToolbarStory({
        isStuck: true,
        useFullTransparentBackground: true,
    });
