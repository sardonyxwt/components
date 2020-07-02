export type AppearanceType = 'light' | 'dark';

export interface ComponentsCombinedTheme {
    name: string;
    dark: ComponentsTheme;
    light: ComponentsTheme;
}

export interface ComponentsTheme {
    type: AppearanceType;
    palette: {
        root: string;
        main: string;
        label: string;
        placeholder: string;
        accent: string;
        secondAccent: string;
        disabled: string;
        block: string;
        element: string;
        outline: string;
        shadow: string;
    };
}
