import React from 'react';
import { ChildrenProps, CommonProps } from '@sardonyxwt/ligui';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Container } from '@source/component/layout/container.component';
import { useStickyBottom } from '@source/hook/sticky-bottom.hook';
import {
    SidebarContent,
    SidebarFooterWrapper,
    SidebarOverlay,
    SidebarWrapper,
} from '@source/component/layout/sidebar.component.styles';

export type SidebarProps = CommonProps &
    ChildrenProps & {
        isOpen?: boolean;
        onOverlayClick?: () => void;
    };

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const sidebarContentRef = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        if (props.isOpen) {
            disableBodyScroll(sidebarContentRef.current);
            return () => enableBodyScroll(sidebarContentRef.current);
        }
    }, [props.isOpen]);

    return (
        <SidebarWrapper
            ref={sidebarContentRef}
            id={props.id}
            style={props.style}
            className={props.className}
            isOpen={props.isOpen}
        >
            <SidebarOverlay onClick={props.onOverlayClick} />
            <SidebarContent>{props.children}</SidebarContent>
        </SidebarWrapper>
    );
};

export type SidebarFooterProps = CommonProps & ChildrenProps;

export const SidebarFooter: React.FC<SidebarFooterProps> = (props) => {
    const sidebarFooterRef = React.useRef<HTMLDivElement>();

    const isPushToBottom = useStickyBottom(sidebarFooterRef.current, true);

    return (
        <SidebarFooterWrapper
            ref={sidebarFooterRef}
            id={props.id}
            style={props.style}
            className={props.className}
            isPushToBottom={isPushToBottom}
        >
            <Container>{props.children}</Container>
        </SidebarFooterWrapper>
    );
};
