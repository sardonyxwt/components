import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    ModalContentWrapper,
    ModalContentContainer,
} from '@source/component/layout/modal/modal-content.component.styles';

export type ModalContentProps = CommonProps & {
    useCentering?: boolean;
    useAllContentAvailableSpace?: boolean;
};

export const ModalContent: React.FC<ModalContentProps> = (props) => (
    <ModalContentWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        useAllContentAvailableSpace={props.useAllContentAvailableSpace}
    >
        <ModalContentContainer useCentering={props.useCentering}>
            {props.children}
        </ModalContentContainer>
    </ModalContentWrapper>
);
