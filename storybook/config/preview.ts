import { themes } from '@storybook/theming';
import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { withStoryDecorator } from './story.decorator';

// Decoration section
addDecorator(withKnobs);
addDecorator(withActions());
addDecorator(withStoryDecorator);

// Args section
export const globalArgTypes = {
    appearance: {
        name: 'Appearance',
        description: 'Global appearance for components',
        defaultValue: 'dark',
        toolbar: {
            icon: 'box',
            items: [
                { value: 'light', right: '□', title: 'Light theme' },
                { value: 'dark', right: '■', title: 'Dark theme' },
            ],
        },
    },
};

export type GlobalArgTypesValues = {
    [key in keyof typeof globalArgTypes]: typeof globalArgTypes[key]['defaultValue'];
};

const darkSchemeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

// Option defaults.
addParameters({
    options: {
        theme: darkSchemeMatchMedia.matches ? themes.dark : themes.light,
        storySort: {
            method: 'alphabetical',
        },
    },
});
