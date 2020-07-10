import React from 'react';
import { Text, TextColor, TextFamily, TextFontSize } from '@source';

export default {
    title: 'Text',
    component: Text,
};

const renderFontFamilyTextExample = (textFamily: TextFamily) =>
    Object.keys(TextFontSize).map((fontSize, i) => (
        <Text key={i} family={textFamily} fontSize={TextFontSize[fontSize]}>
            <span>Font size: {fontSize}</span>
        </Text>
    ));

export const openSansFontFamily = (): React.ReactNode =>
    renderFontFamilyTextExample(TextFamily.Nunito);

export const colors = (): React.ReactNode =>
    Object.keys(TextColor).map((color, i) => (
        <Text key={i} color={TextColor[color]}>
            <span>Color: {color}</span>
        </Text>
    ));

export const link = (): React.ReactNode => (
    <Text isLink>
        <span>Link text</span>
    </Text>
);

export const strikeout = (): React.ReactNode => (
    <Text isStrikeout>
        <span>Strikeout text</span>
    </Text>
);
