import React from 'react';
import moment from 'moment';
import {
    PromoActionWrapper,
    PromoActionCountdown,
} from '@source/component/promo-action.component.styles';
import {
    Text,
    TextColor,
    TextFontSize,
} from '@source/component/text.component';
import { Spacer } from '@source/component/layout/spacer.component';

export type PromoActionProps = {
    price: number;
    currency: string;
    discountPrice?: number;
    endTime?: moment.Moment;
    i18n?: {
        title?: string;
        hurryToGet?: string;
        saving?: string;
        slogan?: string;
        timeUntilNextPromotion?: string;
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
};

export const PromoAction: React.FC<PromoActionProps> = (props) => {
    const { price, discountPrice, currency, i18n } = props;

    const leftPromoTime = React.useMemo(() => {
        const currentTime = moment();
        if (props.endTime) {
            return props.endTime.diff(currentTime, 'seconds');
        }
        const nextWeekEndTime = moment().weekday(7).hour(0).minute(0).second(0);
        return nextWeekEndTime.diff(currentTime, 'seconds');
    }, [props.endTime]);

    if (leftPromoTime <= 0) {
        return null;
    }

    return (
        <PromoActionWrapper>
            <Text fontSize={TextFontSize.L}>
                <b>{i18n.title}&nbsp;</b>
                <Text
                    isInline
                    isStrikeout={!!discountPrice}
                    fontSize={TextFontSize.XL}
                    color={TextColor.Accent}
                >
                    <b>
                        {price} {currency}
                    </b>
                </Text>
            </Text>

            <Spacer />

            {!!discountPrice ? (
                <>
                    <Text fontSize={TextFontSize.XL}>
                        <b>{i18n.hurryToGet}&nbsp;</b>
                        <Text
                            isInline
                            fontSize={TextFontSize.XXL}
                            color={TextColor.Accent}
                        >
                            <b>
                                {discountPrice} {currency}
                            </b>
                        </Text>
                    </Text>
                    <Spacer />
                    <Text fontSize={TextFontSize.L}>
                        <span>
                            {i18n.saving} ~{' '}
                            {100 - Math.ceil((discountPrice / price) * 100)}%
                        </span>
                        <Spacer />
                        <span>{i18n.slogan}:</span>
                    </Text>
                </>
            ) : (
                <Text fontSize={TextFontSize.L}>
                    <span>{i18n.timeUntilNextPromotion}:</span>
                </Text>
            )}

            <Spacer />

            <PromoActionCountdown
                initialSeconds={leftPromoTime}
                i18n={{
                    days: i18n.days,
                    hours: i18n.hours,
                    minutes: i18n.minutes,
                    seconds: i18n.seconds,
                }}
            />
        </PromoActionWrapper>
    );
};

PromoAction.defaultProps = {
    i18n: {},
};
