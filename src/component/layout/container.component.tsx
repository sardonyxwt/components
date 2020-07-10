import React from 'react';
import { ContainerWrapper } from '@source/component/layout/container.component.styles';
import { ChildrenProps, CommonProps } from '@sardonyxwt/ligui';

type ContainerProps = CommonProps &
    ChildrenProps & {
        onClick?: React.MouseEventHandler;
    };

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    (props, ref) => (
        <ContainerWrapper
            ref={ref}
            id={props.id}
            style={props.style}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </ContainerWrapper>
    ),
);

Container.displayName = 'Container';
