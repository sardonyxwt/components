import React from 'react';
import { PromoAction } from '@source';

export default {
    title: 'PromoAction',
    component: PromoAction,
};

const promoActionI18n = {
    title: 'Ценность программы',
    hurryToGet: 'Успей приобрести за',
    saving: 'Экономия',
    slogan: 'Успей приобрести пока действует акция',
    timeUntilNextPromotion: 'Время до следующей акции',
    days: 'Дней',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд',
};

export const promoAction = (): React.ReactNode => (
    <PromoAction currency="USD" price={200} i18n={promoActionI18n} />
);

export const promoActionWithDiscount = (): React.ReactNode => (
    <PromoAction
        currency="USD"
        price={200}
        discountPrice={100}
        i18n={promoActionI18n}
    />
);
