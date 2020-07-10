import styled, { css, DefaultTheme } from 'styled-components';
import {
    TextColor,
    TextFamily,
    TextFontSize,
} from '@source/component/text.component';

export const textFamilyMixin = (family: TextFamily): string =>
    ({
        [TextFamily.Nunito]: `'Nunito', sans-serif !important`,
    }[family]);

export const textColorMixin = (color: TextColor, theme: DefaultTheme): string =>
    ({
        [TextColor.Main]: theme.palette.main,
        [TextColor.Reverse]: theme.palette.root,
        [TextColor.Label]: theme.palette.label,
        [TextColor.Placeholder]: theme.palette.placeholder,
        [TextColor.Accent]: theme.palette.accent,
    }[color]);

export const textFontSizeMixin = (fontSize: TextFontSize): string =>
    ({
        [TextFontSize.XXS]: '10px',
        [TextFontSize.XS]: '12px',
        [TextFontSize.S]: '14px',
        [TextFontSize.M]: '16px',
        [TextFontSize.L]: '18px',
        [TextFontSize.XL]: '20px',
        [TextFontSize.XXL]: '24px',
    }[fontSize]);

export type TextWrapperProps = {
    fontSize: TextFontSize;
    family: TextFamily;
    color: TextColor;
    isStrikeout?: boolean;
    isInline?: boolean;
    isLink?: boolean;
};

export const TextWrapper = styled.div<TextWrapperProps>`
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    ${({ fontSize, family, color, theme }) => css`
        font-size: ${textFontSizeMixin(fontSize)};
        font-family: ${textFamilyMixin(family)};
        color: ${textColorMixin(color, theme)};
    `};

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ isStrikeout }) =>
        isStrikeout &&
        css`
            text-decoration: line-through;
        `};

    ${({ isInline }) =>
        isInline &&
        css`
            display: inline-block;
        `};

    ${({ isLink, theme }) =>
        isLink &&
        css`
            color: ${theme.palette.accent};
            text-decoration: underline;
        `};

    & > * {
        transition: inherit;
        transition-delay: inherit;
        transition-property: inherit;
        transition-duration: inherit;
    }

    h1&,
    & > h1 {
        letter-spacing: -0.5px;
        font-weight: bold;
    }
    h2&,
    & > h2 {
        letter-spacing: -0.5px;
        font-weight: bold;
    }
    h3&,
    & > h3 {
        letter-spacing: -0.5px;
        font-weight: 500;
    }
    h4&,
    & > h4 {
        letter-spacing: -0.55px;
        font-weight: 500;
    }
    h5&,
    & > h5 {
        letter-spacing: -0.55px;
        font-weight: 300;
    }
    h6&,
    & > h6 {
        letter-spacing: -0.55px;
        font-weight: 300;
    }
    label&,
    & > label {
        font-weight: 500;
    }
    p&,
    & > p {
        font-weight: 500;
    }
    span&,
    & > span {
        font-weight: 500;
    }
    b&,
    & > b {
        font-weight: 900;
    }
`;
