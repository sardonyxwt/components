import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    AvatarWrapper,
    AvatarSource,
} from '@source/component/avatar.component.styles';

export type AvatarProps = CommonProps & {
    src: string;
    size?: number;
    useLazyLoading?: boolean;
};

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => (
    <AvatarWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        size={props.size}
    >
        <AvatarSource
            src={props.src}
            useLazyLoading={props.useLazyLoading}
            usePreviewBackground
        />
    </AvatarWrapper>
);

Avatar.defaultProps = {
    size: 24,
    useLazyLoading: true,
};
