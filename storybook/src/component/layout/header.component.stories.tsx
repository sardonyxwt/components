import React from 'react';
import {
    Header,
    HeaderChildrenPosition,
    HeaderProps,
    Text,
    Container,
} from '@source';

export default {
    title: '@layout/Header',
    header: Header,
};

const headerAddon = <Text>Addon</Text>;

export const header = (): React.ReactNode => renderHeaderStory({});

export const headerWithBeforeAddon = (): React.ReactNode =>
    renderHeaderStory({
        before: headerAddon,
    });

export const headerWithAfterAddon = (): React.ReactNode =>
    renderHeaderStory({
        after: headerAddon,
    });

export const headerWithAddons = (): React.ReactNode =>
    renderHeaderStory({
        before: headerAddon,
        after: headerAddon,
    });

const renderHeaderStory = (headerProps: HeaderProps) =>
    Object.getOwnPropertyNames(HeaderChildrenPosition).map(
        (headerChildrenPosition, i) => (
            <React.Fragment key={i}>
                <Container>
                    <Text>
                        <b>{headerChildrenPosition} children position</b>
                    </Text>
                </Container>
                <Header
                    {...headerProps}
                    childrenPosition={
                        HeaderChildrenPosition[headerChildrenPosition]
                    }
                >
                    <Container>
                        <Text>Header</Text>
                    </Container>
                </Header>
            </React.Fragment>
        ),
    );
