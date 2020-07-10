import React from 'react';
import moment from 'moment';
import { ChildrenProps, CommonProps } from '@sardonyxwt/ligui';
import { Text } from '@source/component/text.component';

export enum TimerDirection {
    FORWARD,
    BACKWARD,
    FROZEN,
}

export type TimerRender = (
    formatTime: string,
    duration: moment.Duration,
) => React.ReactElement;

export type TimerProps = CommonProps &
    ChildrenProps<TimerRender> & {
        format?: string;
        direction?: TimerDirection;
        initialSeconds?: number;
    };

export const Timer: React.FC<TimerProps> = (props) => {
    const [currentTimeSeconds, setCurrentTimeSeconds] = React.useState(
        props.initialSeconds,
    );

    React.useEffect(() => {
        setCurrentTimeSeconds(props.initialSeconds);
    }, [props.initialSeconds]);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (currentTimeSeconds <= 0) {
                clearTimeout(timeoutId);
                return;
            }
            switch (props.direction) {
                case TimerDirection.FORWARD:
                    setCurrentTimeSeconds(currentTimeSeconds + 1);
                    break;
                case TimerDirection.BACKWARD:
                    setCurrentTimeSeconds(currentTimeSeconds - 1);
                    break;
                default:
                    return;
            }
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [currentTimeSeconds, props.direction]);

    const duration = moment.duration(currentTimeSeconds, 'seconds');
    const formatTime = moment
        .utc(duration.as('milliseconds'))
        .format(props.format);

    if (props.children) {
        return props.children(formatTime, duration);
    }

    return (
        <Text id={props.id} style={props.style} className={props.className}>
            <b>{formatTime}</b>
        </Text>
    );
};

Timer.defaultProps = {
    format: 'HH:mm:ss',
    direction: TimerDirection.FROZEN,
    initialSeconds: 0,
};
