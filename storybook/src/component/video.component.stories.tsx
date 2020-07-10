import React from 'react';
import { buildVideoPaths, generateSource } from '@sardonyxwt/resources';
import { Video } from '@source';

export default {
    title: 'Video',
    component: Video,
};

const videoSource = generateSource(buildVideoPaths());

export const video = (): React.ReactNode => (
    <Video useControls src={videoSource} />
);

export const autoplayVideo = (): React.ReactNode => (
    <Video useAutoplay isPlaysInline src={videoSource} />
);
