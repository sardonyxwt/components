import React from 'react';
import { useRef, CommonProps } from '@sardonyxwt/ligui';
import { Button } from '@source/component/form/button.component';
import { Svg, SvgId } from '@source/component/svg.component';
import { SocialButtonWrapper } from '@source/component/social-button.component.styles';

export enum SocialButtonType {
    Phone = 'phone',
    Mail = 'mail',
    Instagram = 'instagram',
    Telegram = 'telegram',
    Viber = 'viber',
}

export type SocialButtonProps = CommonProps & {
    type: SocialButtonType;
    data: string;
    size?: string;
    bind?: string | HTMLElement;
};

export const SocialButton: React.FC<SocialButtonProps> = (props) => {
    const socialLinkRef = useRef<HTMLAnchorElement>();

    const svgId: SvgId = React.useMemo(
        () =>
            ({
                [SocialButtonType.Phone]: SvgId.Phone,
                [SocialButtonType.Mail]: SvgId.Email,
                [SocialButtonType.Instagram]: SvgId.Instagram,
                [SocialButtonType.Telegram]: SvgId.Telegram,
                [SocialButtonType.Viber]: SvgId.Viber,
            }[props.type]),
        [props.type],
    );

    const href: string = React.useMemo(
        () =>
            ({
                [SocialButtonType.Phone]: `tel:${props.data}`,
                [SocialButtonType.Mail]: `mailto:${props.data}`,
                [SocialButtonType.Instagram]: `https://instagram.com/${props.data}?r=nametag`,
                [SocialButtonType.Telegram]: `tg://resolve?domain=${props.data}`,
                // TODO add desktop check for viber "chat?number="
                [SocialButtonType.Viber]: `viber://chat?number=%2B${props.data.replace(
                    /[^0-9]/gim,
                    '',
                )}`,
            }[props.type]),
        [props.type],
    );

    React.useEffect(() => {
        if (!props.bind || !socialLinkRef.current) {
            return;
        }

        const bindEl =
            typeof props.bind === 'string'
                ? document.querySelector(props.bind)
                : props.bind;

        if (!bindEl) {
            return;
        }

        const bindHandler = () => socialLinkRef.current.click();

        bindEl.addEventListener('click', bindHandler);
        return () => bindEl.removeEventListener('click', bindHandler);
    }, [props.bind, socialLinkRef.current]);

    return (
        <SocialButtonWrapper
            ref={socialLinkRef}
            id={props.id}
            style={props.style}
            className={props.className}
            href={href}
        >
            <Button useFabStyle ariaLabel={`${props.type} social button`}>
                <Svg svgId={svgId} size={props.size} />
            </Button>
        </SocialButtonWrapper>
    );
};

SocialButton.defaultProps = {
    size: '24px',
};
