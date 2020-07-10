import React from 'react';
import { buildImagePaths, generateSource } from '@sardonyxwt/resources';
import { Image } from '@source';

export default {
    title: 'Image',
    component: Image,
};

export const image = (): React.ReactNode => (
    <Image src={generateSource(buildImagePaths())} />
);
