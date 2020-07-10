import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import { TextFontSize } from '@source/component/text.component';
import {
    ChatMessageContent,
    ChatMessageWrapper,
    ChatWrapper,
} from '@source/component/chat.component.styles';

export type Message = {
    self?: boolean;
    message: string | string[];
};

export type ChatProps = CommonProps & {
    messages?: Message[];
};

export const Chat: React.FC<ChatProps> = ({
    id,
    style,
    className,
    messages,
}) => (
    <ChatWrapper id={id} style={style} className={className}>
        {messages.map(({ message, self }) => {
            const msg = Array.isArray(message) ? message.join('\n') : message;
            return <ChatMessage key={`msg_${msg}`} message={msg} self={self} />;
        })}
    </ChatWrapper>
);

Chat.defaultProps = {
    messages: [],
};

export type ChatMessageProps = Message;

export const ChatMessage: React.FC<ChatMessageProps> = (props) => (
    <ChatMessageWrapper self={props.self}>
        <ChatMessageContent fontSize={TextFontSize.M}>
            {props.message}
        </ChatMessageContent>
    </ChatMessageWrapper>
);
