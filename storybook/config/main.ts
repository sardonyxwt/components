/**
 * @file This is main config for storybook
 * @description You can add addons and update webpack build here
 * @link https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [`../src/**/*.stories.@(ts|tsx)`],
    addons: [
        '@storybook/addon-options',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-docs',
        '@storybook/addon-toolbars',
    ],
    webpackFinal: (config) => {
        config.module.rules = [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader', 'react-docgen-typescript-loader'],
            },
        ];
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
