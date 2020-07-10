import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { GlobalArgTypesValues } from './preview';
import { defaultTheme } from '@source/style/theme/default.theme';
import { SvgSprite } from '@source/component/svg.component';
import { ResetStyle } from '@source/style/reset.style';
import { GlobalStyle } from '@source/style/global.style';
import { FontStyle } from '@source/style/font.style';
import { ModalController } from '@source/component/controller/modal.controller.component';
import { TutorialController } from '@source/component/controller/tutorial.controller.component';

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

    return (
        <ThemeProvider theme={theme}>
            <SvgSprite />
            <ResetStyle />
            <GlobalStyle />
            <FontStyle />
            <ModalController />
            <TutorialController />
            {story()}
        </ThemeProvider>
    );
};
