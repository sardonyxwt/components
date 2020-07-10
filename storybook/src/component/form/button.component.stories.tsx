import React from 'react';
import { action } from '@storybook/addon-actions';
import { Text, TextFontSize, Button, Buttons, Svg, SvgId } from '@source';

export default {
    title: '@form/Button',
    component: Button,
};

export const button = (): React.ReactNode => (
    <Button onClick={action('onClick')}>
        <Text fontSize={TextFontSize.L}>
            <b>Clear</b>
        </Text>
    </Button>
);

export const primaryButton = (): React.ReactNode => (
    <Button isPrimary>
        <Text fontSize={TextFontSize.L}>
            <b>Show (3984)</b>
        </Text>
    </Button>
);

export const primaryIconButtonWithText = (): React.ReactNode => (
    <Button isPrimary>
        <Svg svgId={SvgId.Wish} width="16px" height="16px" />
        <Text fontSize={TextFontSize.L}>
            <b>Show (3984)</b>
        </Text>
    </Button>
);

export const primaryIconButton = (): React.ReactNode => (
    <Button isPrimary useFabStyle>
        <Svg svgId={SvgId.Wish} width="16px" height="16px" />
    </Button>
);

export const iconButton = (): React.ReactNode => (
    <Button useFabStyle>
        <Svg svgId={SvgId.Wish} width="16px" height="16px" />
    </Button>
);

export const buttonFabContainer = (): React.ReactNode => (
    <Buttons>
        <Button>
            <Text fontSize={TextFontSize.XL}>
                <b>Clear</b>
            </Text>
        </Button>
        <Button isPrimary>
            <Text fontSize={TextFontSize.XL}>
                <b>Show (3984)</b>
            </Text>
        </Button>
    </Buttons>
);
