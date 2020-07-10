import React from 'react';
import styled from 'styled-components';
import { lorem } from 'faker';
import { buildImagePaths, generateSource } from '@sardonyxwt/resources';
import {
    Card,
    CardActions,
    CardContent,
    CardPreview,
    Text,
    TextColor,
    Spacer,
    Button,
    Grid,
} from '@source';

export default {
    title: 'Card',
    component: Card,
};

const CardStoryWrapper = styled.div`
    max-width: 300px;
    margin: 16px;
`;

const images = buildImagePaths();

const renderCard = () => (
    <Card>
        <CardPreview src={generateSource(images)} />
        <CardContent>
            <Text>
                <p>{lorem.paragraph()}</p>
                <Spacer />
                <p>{lorem.paragraph()}</p>
            </Text>
        </CardContent>
        <CardActions>
            <Button isPrimary>
                <Text color={TextColor.Reverse}>
                    <b>Buy</b>
                </Text>
            </Button>
            <Button>
                <Text>
                    <b>Details</b>
                </Text>
            </Button>
        </CardActions>
    </Card>
);

export const card = (): React.ReactNode => (
    <CardStoryWrapper>{renderCard()}</CardStoryWrapper>
);

export const cardGrid = (): React.ReactNode => (
    <Grid useColumnWrapper useOuterGap columns={2}>
        {new Array(10).fill(renderCard())}
    </Grid>
);
