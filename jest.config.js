/* eslint-disable @typescript-eslint/no-var-requires */
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf)$': 'jest-transform-stub',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        ...moduleNameMapper,
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Webapp Test Report',
                outputPath: './report/test-report.html',
                includeFailureMsg: true,
                includeConsoleLog: true,
            },
        ],
    ],
    collectCoverage: true,
    coverageDirectory: './report/coverage',
    collectCoverageFrom: [
        'src/app/**/*.{ts,tsx,js,jsx}',
        'src/shared/**/*.{ts,tsx,js,jsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/src/**/*.constant.ts',
    ],
};
