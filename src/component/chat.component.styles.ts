import styled, { css } from 'styled-components';
import { Text } from '@source/component/text.component';

export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export type ChatMessageWrapperProps = {
    self?: boolean;
};

export const ChatMessageWrapper = styled.div<ChatMessageWrapperProps>`
    width: 90%;
    margin-top: 16px;
    border-radius: 16px 16px 16px 0;
    box-shadow: 4px 4px 16px -4px rgb(0, 0, 0);

    &:first-child {
        margin-top: 0;
    }

    ${({ self }) => css`
        align-self: ${self ? 'flex-end' : 'flex-start'};
        border-radius: ${self ? '16px 16px 0 16px' : '16px 16px 16px 0'};
    `};

    ${() => ChatMessageContent} {
        border-radius: ${({ self }) =>
            self ? '12px 12px 0 12px' : '12px 12px 12px 0'};
    }
`;

export const ChatMessageContent = styled(Text)`
    padding: 16px;
    line-height: 1.2;
    white-space: pre-wrap;
    background: ${({ theme }) => theme.palette.element};
`;
