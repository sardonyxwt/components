import React from 'react';

export const useMountElement = (isMountNeeded: boolean): HTMLElement => {
    const mountEl = React.useMemo(() => {
        if (!isMountNeeded) {
            return null;
        }
        const div = document.createElement('div');
        document.body.appendChild(div);
        return div;
    }, [isMountNeeded]);

    React.useEffect(() => () => mountEl?.remove(), [mountEl]);

    return mountEl;
};
