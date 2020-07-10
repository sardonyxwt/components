import React from 'react';
import { Countdown } from '@source';

export default {
    title: 'Countdown',
    component: Countdown,
};

export const countdown = (): React.ReactNode => (
    <Countdown initialSeconds={1000000} />
);

export const endedCountdown = (): React.ReactNode => (
    <Countdown initialSeconds={0} />
);
