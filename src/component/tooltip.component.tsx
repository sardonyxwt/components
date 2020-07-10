import React from 'react';
import ReactDOM from 'react-dom';
import {
    TooltipClose,
    TooltipContent,
    TooltipWrapper,
} from '@source/component/tooltip.component.styles';
import { CommonProps, styles } from '@sardonyxwt/ligui';
import { useMountElement } from '@source/hook/mount-element.hook';
import {
    FlowAroundDirection,
    useFlowAround,
} from '@source/hook/flow-around.hook';
import { Spacer, SpacerSize } from '@source/component/layout/spacer.component';

export type TooltipProps = CommonProps & {
    bindEl: Element;
    direction?: FlowAroundDirection;
    closeDelay?: number;
    isForcedOpen?: boolean;
    usePreRender?: boolean;
    onClose?: () => void;
};

export const TOOLTIP_INDENT = 10;

export const Tooltip: React.FC<TooltipProps> = (props) => {
    const [tooltipEl, setTooltipEl] = React.useState<Element>();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isHover, setIsHover] = React.useState(false);

    const tooltipStyles = useFlowAround(
        tooltipEl,
        props.bindEl,
        props.direction,
        TOOLTIP_INDENT,
    );

    const isTooltipVisible = isOpen || isHover || props.isForcedOpen;

    const mountElement = useMountElement(isTooltipVisible);

    let hideTimeoutId: number;

    const showTooltip = () => {
        clearTimeout(hideTimeoutId);
        setIsOpen(true);
    };

    const hideTooltip = () => {
        hideTimeoutId = setTimeout(() => setIsOpen(false), props.closeDelay);
    };

    React.useEffect(() => {
        if (!props.bindEl) {
            return;
        }
        props.bindEl.addEventListener('mouseenter', showTooltip);
        props.bindEl.addEventListener('mouseleave', hideTooltip);
        return () => {
            props.bindEl.removeEventListener('mouseenter', showTooltip);
            props.bindEl.removeEventListener('mouseleave', hideTooltip);
        };
    }, [props.bindEl]);

    if (!(isTooltipVisible || props.usePreRender)) {
        return null;
    }

    const content = (
        <TooltipWrapper
            ref={(el: HTMLDivElement) => setTooltipEl(el)}
            id={props.id}
            style={styles(tooltipStyles, props.style, {
                visibility: tooltipStyles ? 'visible' : 'hidden',
            })}
            className={props.className}
        >
            <TooltipContent
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {props.onClose && props.isForcedOpen && (
                    <>
                        <TooltipClose onClick={props.onClose} />
                        <Spacer size={SpacerSize.Small} />
                    </>
                )}
                {props.children}
            </TooltipContent>
        </TooltipWrapper>
    );

    return isTooltipVisible && mountElement
        ? ReactDOM.createPortal(content, mountElement)
        : null;
};

Tooltip.defaultProps = {
    direction: FlowAroundDirection.Bottom,
    closeDelay: 500,
};
