import React from 'react';

const checkInRegion = (el: HTMLElement, isActive: boolean) => {
    if (!el || !isActive) {
        return false;
    }
    const { top, bottom } = el.getBoundingClientRect();
    return (
        (top >= 0 && top <= window.innerHeight) ||
        (bottom >= 0 && bottom <= window.innerHeight)
    );
};

export const useRenderRegion = (
    el: HTMLElement,
    isActive = true,
    stopIfOnceInRenderRegion = true,
    dependencies = [],
): [boolean, boolean] => {
    const [isInRenderRegion, setIsInRenderRegion] = React.useState(() =>
        checkInRegion(el, isActive),
    );
    const [isInRenderRegionOnce, setIsInRenderRegionOnce] = React.useState(
        isInRenderRegion,
    );

    const onAction = () => {
        const result = checkInRegion(el, isActive);
        if (result !== isInRenderRegion) {
            setIsInRenderRegion(result);
        }
        if (!isInRenderRegionOnce && result) {
            setIsInRenderRegionOnce(result);
        }
    };

    React.useEffect(() => {
        el && onAction();
    }, [el]);

    React.useEffect(() => {
        setIsInRenderRegionOnce(checkInRegion(el, isActive));
    }, dependencies);

    React.useEffect(() => {
        if (stopIfOnceInRenderRegion && isInRenderRegionOnce) {
            return;
        }

        window.addEventListener('resize', onAction);
        window.addEventListener('scroll', onAction);

        return () => {
            window.removeEventListener('resize', onAction);
            window.removeEventListener('scroll', onAction);
        };
    }, [el, isActive, isInRenderRegionOnce]);

    return [isInRenderRegion, isInRenderRegionOnce];
};
