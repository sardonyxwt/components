import React from 'react';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';
import { Tooltip, Text, FlowAroundDirection } from '@source';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

const GreyBlock = styled.div`
    width: 200px;
    height: 200px;
    background-color: grey;
`;

const TooltipStory: React.FC = () => {
    const [ref, setRef] = React.useState<HTMLDivElement>();

    return (
        <div style={{ padding: '300px' }}>
            <GreyBlock ref={setRef} />
            <Tooltip
                bindEl={ref}
                direction={select(
                    'direction',
                    Object.values(FlowAroundDirection),
                    FlowAroundDirection.Bottom,
                )}
            >
                <Text>
                    <b>Tooltip example text</b>
                </Text>
            </Tooltip>
        </div>
    );
};

export const tooltip = (): React.ReactNode => <TooltipStory />;
