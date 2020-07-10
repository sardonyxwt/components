import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';
import cleaner from 'rollup-plugin-cleaner';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    external: [
        'moment',
        'react-transition-group',
        'react',
        'react-dom',
        'styled-components',
    ],
    plugins: [
        commonjs(),
        resolve(),
        typescript({
            tsconfig: 'tsconfig.rollup.json',
            typescript: require('ttypescript'),
            useTsconfigDeclarationDir: true,
            check: false,
            transformers: [
                () => ({
                    before: [
                        createStyledComponentsTransformer({
                            minify: true,
                        }),
                    ],
                }),
            ],
        }),
        cleaner({
            targets: ['./lib/'],
        }),
        visualizer({
            filename: 'report/stats.html',
        }),
    ],
};
