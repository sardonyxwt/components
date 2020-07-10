import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
    ModalWrapper,
    ModalOverlay,
} from '@source/component/layout/modal.component.styles';
import { ModalContext } from '@source/component/controller/modal.controller.component';

export type ModalProps = CommonProps & {
    isOpen?: boolean;
    isFullscreen?: boolean;
    useMinimizedContent?: boolean;
    onHide?: React.MouseEventHandler;
};

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen } = React.useContext(ModalContext) || {
        isOpen: props.isOpen,
    };

    const modalContentRef = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        if (isOpen) {
            disableBodyScroll(modalContentRef.current);
            return () => enableBodyScroll(modalContentRef.current);
        }
    }, [isOpen]);

    const hideModal = (e: React.MouseEvent) => {
        e.target === e.currentTarget && props.onHide?.(e);
    };

    return (
        <ModalOverlay
            id={props.id}
            style={props.style}
            className={props.className}
            onClick={hideModal}
            isOpen={isOpen}
            isFullscreen={props.isFullscreen}
            useMinimizedContent={props.useMinimizedContent}
        >
            <ModalWrapper
                ref={modalContentRef}
                isOpen={isOpen}
                isFullscreen={props.isFullscreen}
                useMinimizedContent={props.useMinimizedContent}
            >
                {props.children}
            </ModalWrapper>
        </ModalOverlay>
    );
};

export * from './modal/modal-toolbar.component';
export * from './modal/modal-content.component';
export * from './modal/modal-actions.component';
