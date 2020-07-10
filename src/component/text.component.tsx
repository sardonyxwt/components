import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { TextWrapper } from '@source/component/text.component.styles';

export enum TextFontSize {
    XXL = 'xxl',
    XL = 'xl',
    L = 'l',
    M = 'm',
    S = 's',
    XS = 'xs',
    XXS = 'xxs',
}

export enum TextColor {
    None = 'none',
    Main = 'main',
    Label = 'label',
    Placeholder = 'placeholder',
    Reverse = 'reverse',
    Accent = 'accent',
}

export enum TextFamily {
    Nunito = 'nunito',
}

export type TextProps = CommonProps & {
    color?: TextColor;
    family?: TextFamily;
    fontSize?: TextFontSize;
    isStrikeout?: boolean;
    isInline?: boolean;
    isLink?: boolean;
    as?: keyof JSX.IntrinsicElements;
};

export const Text: React.FC<TextProps> = (props) => (
    <TextWrapper
        id={props.id}
        style={props.style}
        className={props.className}
        color={props.color}
        family={props.family}
        fontSize={props.fontSize}
        isStrikeout={props.isStrikeout}
        isInline={props.isInline}
        isLink={props.isLink}
        as={props.as}
    >
        {props.children}
    </TextWrapper>
);

Text.defaultProps = {
    color: TextColor.Main,
    family: TextFamily.Nunito,
    fontSize: TextFontSize.S,
};
