import React from 'react';
import { lorem, random } from 'faker';
import { Chat, Message } from '@source';

export default {
    title: 'Chat',
    component: Chat,
};

const messages: Message[] = lorem
    .paragraphs(10, ',')
    .split(',')
    .map((it) => ({
        self: random.boolean(),
        message: it,
    }));

export const chat = (): React.ReactNode => <Chat messages={messages} />;
