import * as React from 'react';
import * as Enzyme from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@source/style/theme/default.theme';

export function createSnapshot<T>(element: React.ReactElement<T>): void {
    const component = Enzyme.mount(element);
    expect(component.html()).toMatchSnapshot();
}

export function createSnapshotTest<T>(description: string, element: React.ReactElement<T>): void {
    it(`Snapshot (${description})`, () => {
        const renderedElement = React.createElement(ThemeProvider, { theme: defaultTheme.dark }, element);
        createSnapshot(renderedElement);
    });
}

export function createRenderTest<T>(description: string, element: React.ReactElement<T>): void {
    it(`Render (${description})`, () => {
        const renderedElement = React.createElement(ThemeProvider, { theme: defaultTheme.dark }, element);
        const component = Enzyme.mount(renderedElement);
        expect(component).toBeDefined();
    });
}
