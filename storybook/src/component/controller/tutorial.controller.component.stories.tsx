import React from 'react';
import styled from 'styled-components';
import {
    ElementMarker,
    MarkedElementsStore,
    Button,
    Spacer,
    Text,
    TutorialController,
} from '@source';

export default {
    title: '@controller/TutorialController',
};

const GreyBlock = styled.div`
    width: 200px;
    height: 200px;
    background-color: grey;
`;

const TutorialStoryWrapper = styled.div`
    margin: 100px;
`;

const TutorialStory: React.FC = () => {
    const runTutorial = () =>
        TutorialController.run([
            {
                el: '#id1',
                content: (
                    <Text>
                        <b>Tutorial node 1</b>
                    </Text>
                ),
            },
            {
                el: () => document.getElementById('id2'),
                content: (
                    <Text>
                        <b>Tutorial node 2</b>
                    </Text>
                ),
            },
            {
                el: () => MarkedElementsStore.get('id3'),
                content: (
                    <Text>
                        <b>Tutorial node 3</b>
                    </Text>
                ),
            },
        ]);

    return (
        <TutorialStoryWrapper>
            <Button onClick={runTutorial}>
                <Text>
                    <b>Start tutorial</b>
                </Text>
            </Button>
            <Spacer />
            <GreyBlock id="id1" />
            <Spacer />
            <GreyBlock id="id2" />
            <Spacer />
            <ElementMarker markId="id3">
                {(ref) => <GreyBlock ref={ref} />}
            </ElementMarker>
        </TutorialStoryWrapper>
    );
};

export const tutorial = (): React.ReactNode => <TutorialStory />;
