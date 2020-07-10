import styled, { css } from 'styled-components';
import {
    textColorMixin,
    textFamilyMixin,
    textFontSizeMixin,
} from '@source/component/text.component.styles';
import {
    Text,
    TextColor,
    TextFamily,
    TextFontSize,
} from '@source/component/text.component';
import { spacerSizeMixin } from '@source/component/layout/spacer.component.styles';
import { SpacerSize } from '@source/component/layout/spacer.component';

export type InputWrapperProps = {
    isError?: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
    width: 100%;
    margin-bottom: ${spacerSizeMixin(SpacerSize.Large)};
    position: relative;
    border-radius: 24px;
    border: solid 2px ${({ theme }) => theme.palette.outline};
    box-sizing: border-box;

    ${({ isError }) =>
        isError &&
        css`
            border: solid 2px ${({ theme }) => theme.palette.accent};
        `}
`;

const fieldStyleMixin = css`
    resize: none;
    width: calc(100% - 18px * 2);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 16px 18px 5px;
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent !important;
    padding: 0;
    position: relative;
    color: ${({ theme }) => textColorMixin(TextColor.Main, theme)};
    font-size: ${textFontSizeMixin(TextFontSize.M)};
    font-family: ${textFamilyMixin(TextFamily.Nunito)};

    transition: background-color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) =>
        textColorMixin(TextColor.Main, theme)} !important;
`;

export const InnerInput = styled.input.attrs(() => ({
    placeholder: ' ',
}))`
    ${fieldStyleMixin}
`;

export const InnerTextarea = styled.textarea.attrs(() => ({
    placeholder: ' ',
}))`
    ${fieldStyleMixin}
`;

export const InputLabel = styled(Text)`
    position: absolute;
    left: 18px;
    top: 15px;
    pointer-events: none;
    transition-property: transform;
    transition-duration: 0.3s;
    transform-origin: top left;

    ${InnerInput}:focus + &,
    ${InnerInput}:not(:placeholder-shown) + &,
    ${InnerTextarea}:focus + &,
    ${InnerTextarea}:not(:placeholder-shown) + &{
        opacity: 0.5;
        transform: scale(0.85) translateY(-12px);
    }
`;

export const InputOptionalFlag = styled.span`
    font-style: italic;
`;

export const InputError = styled(Text).attrs(() => ({
    color: TextColor.Accent,
}))`
    position: absolute;
    left: 18px;
    bottom: -20px;
    &:before {
        content: '⚠ ';
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
    }
`;
