import React from 'react';
import { Text, TextFontSize } from '@source/component/text.component';
import { Timer, TimerDirection } from '@source/component/timer.component';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    CountdownItem,
    CountdownWrapper,
} from '@source/component/countdown.component.styles';

export type CountdownProps = CommonProps & {
    initialSeconds?: number;
    i18n?: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };
};

const formatOutput = (out: number, maxOut = 99) => {
    if (out > maxOut) {
        return maxOut;
    }
    if (out < 10) {
        return `0${out}`;
    }
    return out;
};

export const Countdown: React.FC<CountdownProps> = (props) => (
    <Timer
        format="dd:hh:mm:ss"
        direction={TimerDirection.BACKWARD}
        initialSeconds={props.initialSeconds}
    >
        {(_, duration) => (
            <CountdownWrapper
                id={props.id}
                style={props.style}
                className={props.className}
            >
                <CountdownItem>
                    <Text fontSize={TextFontSize.XXL}>
                        <b>{formatOutput(duration.days(), 999)}</b>
                    </Text>
                    <Text fontSize={TextFontSize.XS}>{props.i18n.days}</Text>
                </CountdownItem>
                <CountdownItem>
                    <Text fontSize={TextFontSize.XXL}>
                        <b>{formatOutput(duration.hours())}</b>
                    </Text>
                    <Text fontSize={TextFontSize.XS}>{props.i18n.hours}</Text>
                </CountdownItem>
                <CountdownItem>
                    <Text fontSize={TextFontSize.XXL}>
                        <b>{formatOutput(duration.minutes())}</b>
                    </Text>
                    <Text fontSize={TextFontSize.XS}>{props.i18n.minutes}</Text>
                </CountdownItem>
                <CountdownItem>
                    <Text fontSize={TextFontSize.XXL}>
                        <b>{formatOutput(duration.seconds())}</b>
                    </Text>
                    <Text fontSize={TextFontSize.XS}>{props.i18n.seconds}</Text>
                </CountdownItem>
            </CountdownWrapper>
        )}
    </Timer>
);

Countdown.defaultProps = {
    initialSeconds: 0,
    i18n: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
    },
};
