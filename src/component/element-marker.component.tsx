import React from 'react';

export class MarkedElementsStore {
    private static elementInfos: Record<string, Element> = {};

    static add(id: string, el: Element): void {
        if (!this.has(id)) {
            this.elementInfos[id] = el;
        }
    }

    static remove(id: string): void {
        delete this.elementInfos[id];
    }

    static get(id: string): Element {
        return this.elementInfos[id];
    }

    static has(id: string): boolean {
        return id in this.elementInfos;
    }
}

export type ElementMarkerProps = {
    markId: string;
    children: (ref: (markedEl: Element) => void) => React.ReactElement;
};

export const ElementMarker: React.FC<ElementMarkerProps> = (props) => {
    const [markedEl, setMarkedEl] = React.useState<Element>();

    const node = props.children(setMarkedEl);

    React.useEffect(() => {
        if (markedEl) {
            MarkedElementsStore.add(props.markId, markedEl);
        }
        return () => MarkedElementsStore.remove(props.markId);
    }, [markedEl]);

    return node;
};
