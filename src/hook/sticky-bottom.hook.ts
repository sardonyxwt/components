import React from 'react';
import { useFrameCallRepeat } from '@source/hook/frame-call-repeat.hook';

export function useStickyBottom(
    el: HTMLElement,
    isActive?: boolean,
    useWindowHeight?: boolean,
): boolean {
    const [isPushToBottom, setIsPushToBottom] = React.useState(false);

    const setNewIsPushToBottomState = React.useMemo(
        () => () => {
            if (!isActive || !el) {
                return false;
            }

            const containerHeight = useWindowHeight
                ? window.innerHeight
                : el.parentElement.clientHeight;
            const previousSiblingEl = el.previousElementSibling as HTMLElement;

            if (!containerHeight || !previousSiblingEl) {
                return false;
            }

            setIsPushToBottom(
                containerHeight -
                    previousSiblingEl.clientHeight -
                    previousSiblingEl.offsetTop -
                    el.clientHeight >
                    0,
            );
        },
        [el, isActive, useWindowHeight],
    );

    useFrameCallRepeat(10, setNewIsPushToBottomState);

    React.useEffect(() => {
        if (!isActive || !el) {
            return;
        }

        setNewIsPushToBottomState();

        window.addEventListener('resize', setNewIsPushToBottomState);
        window.addEventListener('scroll', setNewIsPushToBottomState);
        return () => {
            window.removeEventListener('resize', setNewIsPushToBottomState);
            window.removeEventListener('scroll', setNewIsPushToBottomState);
        };
    }, [setNewIsPushToBottomState]);

    return isPushToBottom;
}
