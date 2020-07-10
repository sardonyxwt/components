import React from 'react';

// TODO check cancelAnimationFrame work
export const useFrameCallRepeat = (count: number, cb: () => void): void => {
    React.useEffect(() => {
        let currentCycle = 0;
        let animationFrameId: number;
        const action = () => {
            if (currentCycle < count) {
                animationFrameId = requestAnimationFrame(action);
            }
            cb();
            currentCycle++;
        };
        action();
        return () => cancelAnimationFrame(animationFrameId);
    }, [count, cb]);
};
