import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { GlobalArgTypesValues } from './preview';
import { defaultTheme } from '@source/style/theme/default.theme';

/**
 * @summary This is global story decorator.
 * @description You can add any providers here (Apollo, Styled, ...etc).
 * @param story This is story render callback.
 * @param args This is story args you can use it to setup theme, locale, etc...
 */
export const withStoryDecorator: DecoratorFn = (story, args) => {
    const { appearance } = args.globalArgs as GlobalArgTypesValues;
    // You can create theme with appearance and use at this place
    const theme = defaultTheme[appearance];

    return <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
};
