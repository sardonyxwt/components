import React from 'react';
import { buildVideoPaths, generateSourceList } from '@sardonyxwt/resources';
import { PreviewSlider } from '@source';

export default {
    title: 'PreviewSlider',
    component: PreviewSlider,
};

export const previewSlider = (): React.ReactNode => (
    <PreviewSlider sources={generateSourceList(buildVideoPaths(), 4)} />
);
