import React from 'react';
import { Timer, TimerDirection } from '@source';

export default {
    title: 'Timer',
    component: Timer,
};

export const backwardShortTimer = (): React.ReactNode => (
    <Timer direction={TimerDirection.BACKWARD} initialSeconds={5} />
);

export const backwardLongTimer = (): React.ReactNode => (
    <Timer direction={TimerDirection.BACKWARD} initialSeconds={3605} />
);

export const forwardTimer = (): React.ReactNode => (
    <Timer direction={TimerDirection.FORWARD} initialSeconds={3725} />
);

export const frozenBackwardTimer = (): React.ReactNode => (
    <Timer direction={TimerDirection.FROZEN} initialSeconds={2345} />
);
