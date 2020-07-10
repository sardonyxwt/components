import React from 'react';
import { Text, Spacer, SpacerSize, SpacerType } from '@source';

export default {
    title: '@layout/Spacer',
    component: Spacer,
};

export const verticalSpacer = (): React.ReactNode => (
    <Text>
        <p>
            Small spacer
            <Spacer size={SpacerSize.Small} />
            Medium spacer
            <Spacer />
            Large spacer
            <Spacer size={SpacerSize.Large} />
            ------------
        </p>
    </Text>
);

export const horizontalSpacer = (): React.ReactNode => (
    <Text>
        <p>
            Small spacer
            <Spacer type={SpacerType.Horizontal} size={SpacerSize.Small} />
            Medium spacer
            <Spacer type={SpacerType.Horizontal} />
            Large spacer
            <Spacer type={SpacerType.Horizontal} size={SpacerSize.Large} />
            ------------
        </p>
    </Text>
);
