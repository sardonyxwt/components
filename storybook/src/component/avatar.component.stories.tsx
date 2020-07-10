import React from 'react';
import styled from 'styled-components';
import { buildAvatarPaths, generateSourceList } from '@sardonyxwt/resources';
import { Avatar } from '@source';

const AvatarStory = styled.div`
    & > {
        margin: 8px;
        display: block;
    }
`;

export default {
    title: 'Avatar',
    component: Avatar,
};

const avatarSources = generateSourceList(buildAvatarPaths(), 12);

export const avatar = (): React.ReactNode => (
    <AvatarStory>
        {avatarSources
            .map((avatarSource, i) => (
                <Avatar
                    key={avatarSource + i}
                    size={40 + 10 * i}
                    src={avatarSource}
                />
            ))
            .reverse()}
    </AvatarStory>
);
