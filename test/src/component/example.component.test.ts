import * as React from 'react';
import {
    createRenderTest,
    createSnapshotTest,
} from '@test/helper/testing.helper';
import { Example } from '@source';

describe('Example Component Test', () => {
    createRenderTest(
        'Example component default',
        React.createElement(Example, {}),
    );
    createSnapshotTest(
        'Example component default',
        React.createElement(Example, {}),
    );
    createSnapshotTest(
        'Example component with useReversColor',
        React.createElement(Example, {
            useReversColor: true,
        }),
    );
});
