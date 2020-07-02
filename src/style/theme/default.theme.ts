import { ComponentsCombinedTheme } from '@source/types';

export const defaultTheme: ComponentsCombinedTheme = {
    name: 'default',
    dark: {
        type: 'dark',
        palette: {
            root: '#10111d',
            main: '#eeefef',
            label: '#92939a',
            placeholder: '#92939a',
            accent: '#e03179',
            secondAccent: '#ff773d',
            disabled: '#30313c',
            block: '#181925',
            element: '#21222d',
            outline: '#3f414b',
            shadow: 'rgba(16, 17, 29, 0.9)',
        },
    },
    light: {
        type: 'light',
        palette: {
            root: '#eeefef',
            main: '#10111d',
            label: '#73737b',
            placeholder: '#676871',
            accent: '#fc6188',
            secondAccent: '#ff773d',
            disabled: '#30313c',
            block: '#c8c8c8',
            element: '#dbdbdb',
            outline: '#3f414b',
            shadow: 'rgba(238, 239, 239, 0.9)',
        },
    },
};
