import React from 'react';

export enum FlowAroundDirection {
    BottomStart = 'bottom-start',
    BottomEnd = 'bottom-end',
    TopStart = 'top-start',
    TopEnd = 'top-end',
    Right = 'right',
    Left = 'left',
    RightStart = 'right-start',
    RightEnd = 'right-end',
    LeftStart = 'left-start',
    LeftEnd = 'left-end',
    Top = 'top',
    Bottom = 'bottom',
    TopLeftCorner = 'top-left-corner',
    TopRightCorner = 'top-right-corner',
    BottomLeftCorner = 'bottom-left-corner',
    BottomRightCorner = 'bottom-right-corner',
    ScreenCenter = 'screen-center',
}

export interface FlowAroundOffset {
    top: number;
    left: number;
}

export const useFlowAround = (
    el?: Element,
    bindEl?: Element,
    position = FlowAroundDirection.Bottom,
    indent = 0,
): React.CSSProperties => {
    const [
        tooltipOffset,
        setTooltipOffset,
    ] = React.useState<FlowAroundOffset | null>(null);

    React.useEffect(() => {
        if (!bindEl || !el) {
            return;
        }

        const setOffset = () => {
            const elRect = el.getBoundingClientRect();
            const bindElRect = bindEl.getBoundingClientRect();

            const offset = calculateOffset(
                elRect,
                bindElRect,
                position,
                indent,
            );

            setTooltipOffset(offset);
        };

        setOffset();

        window.addEventListener('resize', setOffset);
        return () => {
            window.removeEventListener('resize', setOffset);
        };
    }, [el, bindEl, position]);

    return tooltipOffset;
};

const calculateOffset = (
    elRect: DOMRect,
    bindElRect: DOMRect,
    position: FlowAroundDirection,
    indent: number,
): FlowAroundOffset => {
    const positionPriorities = [
        position,
        ...Object.values(FlowAroundDirection).filter(
            (it) => it !== FlowAroundDirection.ScreenCenter,
        ),
    ];

    let top = 0;
    let left = 0;

    for (let i = 0; i < positionPriorities.length; i = i + 1) {
        const position = positionPriorities[i];
        let topOffset = calculateTopOffset(
            elRect,
            bindElRect,
            position,
            indent,
        );
        let leftOffset = calculateLeftOffset(
            elRect,
            bindElRect,
            position,
            indent,
        );

        const isLastVariant = i === positionPriorities.length - 1;

        if (topOffset < 0 || topOffset + elRect.height > window.innerHeight) {
            if (!isLastVariant) {
                continue;
            }
            if (topOffset < 0) {
                topOffset = indent;
            } else if (topOffset + elRect.height > window.innerHeight) {
                topOffset = window.innerHeight - elRect.height - indent;
            }
        }

        if (leftOffset < 0 || leftOffset + elRect.width > window.innerWidth) {
            if (!isLastVariant) {
                continue;
            }
            if (leftOffset < 0) {
                leftOffset = indent;
            } else if (leftOffset + elRect.width > window.innerWidth) {
                leftOffset = window.innerWidth - elRect.width - indent;
            }
        }

        top = topOffset + pageYOffset;
        left = leftOffset + pageXOffset;
        break;
    }

    return { top, left };
};

const calculateTopOffset = (
    elRect: DOMRect,
    bindElRect: DOMRect,
    position: FlowAroundDirection,
    indent: number,
) => {
    const top = () => bindElRect.top - elRect.height - indent;
    const bottom = () => bindElRect.bottom + indent;
    const centerVertical = () => (top() + bottom()) / 2;

    switch (position) {
        case FlowAroundDirection.Left:
        case FlowAroundDirection.Right:
            return centerVertical();
        case FlowAroundDirection.LeftStart:
        case FlowAroundDirection.RightStart:
            return bindElRect.top;
        case FlowAroundDirection.LeftEnd:
        case FlowAroundDirection.RightEnd:
            return bindElRect.bottom - elRect.height;
        case FlowAroundDirection.Top:
        case FlowAroundDirection.TopStart:
        case FlowAroundDirection.TopEnd:
        case FlowAroundDirection.TopLeftCorner:
        case FlowAroundDirection.TopRightCorner:
            return top();
        case FlowAroundDirection.Bottom:
        case FlowAroundDirection.BottomStart:
        case FlowAroundDirection.BottomEnd:
        case FlowAroundDirection.BottomLeftCorner:
        case FlowAroundDirection.BottomRightCorner:
            return bottom();
        case FlowAroundDirection.ScreenCenter:
            return (window.innerHeight - elRect.height) / 2;
    }
};

const calculateLeftOffset = (
    elRect: DOMRect,
    bindElRect: DOMRect,
    direction: FlowAroundDirection,
    indent: number,
) => {
    const left = () => bindElRect.left - elRect.width - indent;
    const right = () => bindElRect.right + indent;
    const centerHorizontal = () => (left() + right()) / 2;

    switch (direction) {
        case FlowAroundDirection.Top:
        case FlowAroundDirection.Bottom:
            return centerHorizontal();
        case FlowAroundDirection.TopStart:
        case FlowAroundDirection.BottomStart:
            return bindElRect.left;
        case FlowAroundDirection.TopEnd:
        case FlowAroundDirection.BottomEnd:
            return bindElRect.right - elRect.width;
        case FlowAroundDirection.Left:
        case FlowAroundDirection.LeftStart:
        case FlowAroundDirection.LeftEnd:
        case FlowAroundDirection.TopLeftCorner:
        case FlowAroundDirection.BottomLeftCorner:
            return left();
        case FlowAroundDirection.Right:
        case FlowAroundDirection.RightStart:
        case FlowAroundDirection.RightEnd:
        case FlowAroundDirection.TopRightCorner:
        case FlowAroundDirection.BottomRightCorner:
            return right();
        case FlowAroundDirection.ScreenCenter:
            return (window.innerWidth - elRect.width) / 2;
    }
};
