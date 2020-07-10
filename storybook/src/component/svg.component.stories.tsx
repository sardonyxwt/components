import React from 'react';
import styled from 'styled-components';
import { Svg, SvgId, Text, TextFontSize } from '@source';

const SvgStoryItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    display: inline-flex;
    margin: 8px 8px 8px 0;
    padding: 8px;
    border: solid 1px #878787;
    border-radius: 12px;
    & > *:first-child {
        min-width: 150px;
        padding-right: 16px;
    }
`;

export default {
    title: 'Svg',
    component: Svg,
};

export const svgIcons = (): React.ReactNode =>
    Object.keys(SvgId).map((svgKey) => (
        <SvgStoryItem key={svgKey}>
            <Text key={svgKey} fontSize={TextFontSize.M}>
                <b>{svgKey}: </b>
            </Text>
            <Svg svgId={SvgId[svgKey]} height="24px" />
        </SvgStoryItem>
    ));
