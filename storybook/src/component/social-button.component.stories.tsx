import React from 'react';
import styled from 'styled-components';
import { Text, TextFontSize, SocialButton, SocialButtonType } from '@source';

const SocialButtonStoryItem = styled.div`
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
    title: 'SocialButton',
    component: SocialButton,
};

export const socialButtons = (): React.ReactNode =>
    Object.keys(SocialButtonType).map((socialButtonTypeKey) => (
        <SocialButtonStoryItem key={socialButtonTypeKey}>
            <Text key={socialButtonTypeKey} fontSize={TextFontSize.M}>
                <b>{socialButtonTypeKey}: </b>
            </Text>
            <SocialButton
                type={SocialButtonType[socialButtonTypeKey]}
                data=""
            />
        </SocialButtonStoryItem>
    ));
