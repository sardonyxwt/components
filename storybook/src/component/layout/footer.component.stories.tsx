import React from 'react';
import { Footer } from '@source';

export default { title: '@layout/Footer' };

export const footer = (): React.ReactNode => (
    <Footer copyright={location.hostname} />
);
