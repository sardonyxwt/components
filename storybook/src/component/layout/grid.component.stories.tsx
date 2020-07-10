import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { generateSourceList, buildImagePaths } from '@sardonyxwt/resources';
import { Grid, Image } from '@source';

export default {
    title: '@layout/Grid',
    component: Grid,
};

function generateImagePreview() {
    return generateSourceList(buildImagePaths(), 10).map((imgSource, i) => (
        <Image key={i} src={imgSource} usePreviewBackground />
    ));
}

export const grid = (): React.ReactNode => (
    <Grid
        useColumnWrapper={boolean('useColumnWrapper', false)}
        useRowWrapper={boolean('useRowWrapper', false)}
        useOuterGap={boolean('useOuterGap', true)}
        columns={number('columns', 2)}
        rows={number('rows', 0)}
        columnGap={text('columnGap', '8px')}
        rowGap={text('rowGap', '8px')}
    >
        {generateImagePreview()}
    </Grid>
);

export const gridWithColumnWrapper = (): React.ReactNode => (
    <Grid
        useColumnWrapper={boolean('useColumnWrapper', true)}
        useRowWrapper={boolean('useRowWrapper', false)}
        useOuterGap={boolean('useOuterGap', true)}
        columns={number('columns', 2)}
        rows={number('rows', 0)}
        columnGap={text('columnGap', '8px')}
        rowGap={text('rowGap', '8px')}
    >
        {generateImagePreview()}
    </Grid>
);

export const gridWithRowWrapper = (): React.ReactNode => (
    <Grid
        useColumnWrapper={boolean('useColumnWrapper', false)}
        useRowWrapper={boolean('useRowWrapper', true)}
        useOuterGap={boolean('useOuterGap', false)}
        columns={number('columns', 0)}
        rows={number('rows', 2)}
        columnGap={text('columnGap', '8px')}
        rowGap={text('rowGap', '8px')}
    >
        {generateImagePreview()}
    </Grid>
);
