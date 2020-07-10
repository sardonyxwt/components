import styled from 'styled-components';
import { Countdown } from '@source/component/countdown.component';
import { Container } from '@source/component/layout/container.component';

export const PromoActionWrapper = styled(Container)`
    padding: 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.element};
    text-align: center;
`;

export const PromoActionCountdown = styled(Countdown)`
    margin: auto;
`;
