import React from 'react';
import { ThemeContext } from 'styled-components';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    SvgSpriteWrapper,
    SvgWrapper,
} from '@source/component/svg.component.styles';
import {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes,
} from 'react';

export enum SvgId {
    Menu = 'menuIcon',
    Wish = 'wishIcon',
    Close = 'closeIcon',
    Phone = 'phoneIcon',
    Email = 'emailIcon',
    Instagram = 'instagramIcon',
    Viber = 'viberIcon',
    Telegram = 'telegramIcon',
    LikeComment = 'likeCommentIcon',
    Appearance = 'appearanceIcon',
}

export type SvgProps = CommonProps & {
    svgId: SvgId;
    width?: string;
    height?: string;
    size?: string;
    fill?: string;
    onClick?: React.MouseEventHandler;
};

type SvgType = ForwardRefExoticComponent<
    PropsWithoutRef<SvgProps> & RefAttributes<SVGSVGElement>
>;

// eslint-disable-next-line react/display-name
export const Svg: SvgType = React.forwardRef((props, ref) => (
    <SvgWrapper
        ref={ref}
        id={props.id}
        style={props.style}
        className={props.className}
        width={props.width || props.size}
        height={props.height || props.size}
        fill={props.fill}
        onClick={props.onClick}
    >
        <use xlinkHref={`#${props.svgId}`} />
    </SvgWrapper>
));

export const SvgSprite: React.FC = () => {
    const theme = React.useContext(ThemeContext);
    const { main } = theme.palette;

    return (
        <SvgSpriteWrapper width="0" height="0">
            {/* eslint-disable max-len */}
            <symbol id={SvgId.Menu} viewBox="0 0 24 24">
                <g fill={main}>
                    <path d="M4 9h16V6H4zM20 15H4v3h16z" />
                </g>
            </symbol>
            <symbol id={SvgId.Appearance} viewBox="0 0 512 512">
                <path
                    style={{ fill: '#3F4347' }}
                    d="M256,0v512c141.392,0,256-114.608,256-256S397.392,0,256,0z"
                />
                <path
                    style={{ fill: '#4E99D2' }}
                    d="M256,0v512C114.608,512,0,397.392,0,256S114.608,0,256,0z"
                />
                <g>
                    <path
                        style={{ fill: '#F3C432' }}
                        d="M103.408,256.016c0-84.272,68.32-152.592,152.592-152.592V31.648l-0.032-0.032l-39.232,52.496
                        l-58.128-30.224l-12.56,64.32l-65.52-2.096L97.12,179.52l-59.888,26.624l42.416,49.936L37.2,306.016l59.936,26.512L80.56,395.936
                        l65.504-2.016l12.592,64.32l58.128-30.336L256,480.4v-71.776C171.728,408.624,103.408,340.304,103.408,256.016z"
                    />
                    <path
                        style={{ fill: '#F3C432' }}
                        d="M103.408,256.016c0,84.272,68.32,152.592,152.592,152.592V103.424
C171.728,103.424,103.408,171.744,103.408,256.016z"
                    />
                </g>
                <path
                    style={{ fill: '#FFD83B' }}
                    d="M131.92,256.016c0,68.528,55.552,124.08,124.08,124.08v-248.16
C187.472,131.936,131.92,187.488,131.92,256.016z"
                />
                <path
                    style={{ fill: '#FFFFFF' }}
                    d="M380.08,256.016c0,68.528-55.552,124.08-124.08,124.08v-248.16
C324.528,131.936,380.08,187.488,380.08,256.016z"
                />
                <g>
                    <circle
                        style={{ fill: '#DDE3E9' }}
                        cx="287.088"
                        cy="307.04"
                        r="21.952"
                    />
                    <circle
                        style={{ fill: '#DDE3E9' }}
                        cx="302.672"
                        cy="200.592"
                        r="17.584"
                    />
                    <circle
                        style={{ fill: '#DDE3E9' }}
                        cx="344.496"
                        cy="271.648"
                        r="13.472"
                    />
                </g>
            </symbol>
            <symbol id={SvgId.Wish} viewBox="0 0 57 59">
                <g fill="none" fillRule="evenodd">
                    <g fill={main}>
                        <path d="M24.908 32.015l1.31-4.979 4.95-1.065 25.874 26.652-6.259 6.044z" />
                        <path d="M14.256 6.997L21.797.923c1.16-.932 2.939.048 2.841 1.565l-.63 9.877 8.463 5.608c1.3.863 1.004 2.816-.471 3.119l-9.614 1.977-2.311 9.539c-.356 1.465-2.318 1.693-3.135.363l-5.308-8.656-9.893.287c-1.52.044-2.437-1.768-1.465-2.894l6.333-7.325L2.804 5.02A1.65 1.65 0 0 1 5.03 2.869l9.225 4.128z" />
                    </g>
                </g>
            </symbol>
            <symbol id={SvgId.Close} viewBox="0 0 64 64">
                <g fill="none" fillRule="evenodd" stroke={main} strokeWidth="6">
                    <path d="M20 20l24 24M20 44l24-24" />
                </g>
            </symbol>
            <symbol id={SvgId.Instagram} viewBox="0 0 24 24">
                <g fill={main}>
                    <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" />
                    <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
                    <circle cx="18.406" cy="5.595" r="1.439" />
                </g>
            </symbol>
            <symbol id={SvgId.Phone} viewBox="0 0 384 384">
                <g fill={main}>
                    <path
                        d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                    />
                </g>
            </symbol>
            <symbol id={SvgId.Email} viewBox="0 0 512 512">
                <g fill={main}>
                    <path
                        d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
                    c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
                    C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"
                    />
                    <path
                        d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
                    c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
                    C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
                    v-268.25C512,132.927,509.583,129.146,505.813,127.406z"
                    />
                </g>
            </symbol>
            <symbol id={SvgId.Telegram} viewBox="0 0 24 24">
                <g fill={main}>
                    <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" />
                </g>
            </symbol>
            <symbol id={SvgId.Viber} viewBox="0 0 24 24">
                <g fill={main}>
                    <path d="m23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939-13.508-3.374-17.2.132-1.658 1.715-2.242 4.232-2.306 7.348-.064 3.117-.14 8.956 5.301 10.54h.005l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zm-12.237 5.477s-2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016-4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168 3.239-3.037 12.376-2.358 14.704-.17 2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 5.183-4.667 5.394-.271.09-2.786.737-5.944.526z" />
                    <path d="m12.222 4.297c-.385 0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c-.032-4.115-2.718-6.501-6.058-6.524z" />
                    <path d="m16.151 10.193c-.009.398.58.417.585.014.049-2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716z" />
                    <path d="m15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014-.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337-1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517 1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z" />
                    <path d="m13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766-2.096-2.03-2.166-.385-.023-.421.582-.032.605z" />
                </g>
            </symbol>
            <symbol id={SvgId.LikeComment} viewBox="0 0 512 512">
                <path
                    fill="#dbe2eb"
                    d="m301.097656 512c-2.039062 0-4.089844-.417969-6.023437-1.265625-4.9375-2.175781-8.335938-6.84375-8.894531-12.230469l-6.984376-67.398437h-207.714843c-39.414063 0-71.480469-32.175781-71.480469-71.722657v-287.660156c0-39.546875 32.066406-71.722656 71.480469-71.722656h369.042969c39.410156 0 71.476562 32.175781 71.476562 71.722656v287.660156c0 39.546876-32.066406 71.722657-71.476562 71.722657h-26.289063l-104.171875 77.910156c-2.632812 1.972656-5.785156 2.984375-8.964844 2.984375zm0 0"
                />
                <path
                    fill="#f3f5fb"
                    d="m256 0h-184.519531c-39.414063 0-71.480469 32.175781-71.480469 71.722656v287.660156c0 39.546876 32.066406 71.722657 71.480469 71.722657h184.519531zm0 0"
                />
                <path
                    fill="#ff6568"
                    d="m256 356.984375c-2.402344 0-4.804688-.578125-6.992188-1.734375-1.59375-.84375-39.441406-20.96875-77.800781-51.261719-53.894531-42.5625-81.089843-83.140625-80.828125-120.597656.171875-24.796875 9.832032-48.078125 27.207032-65.5625 17.445312-17.550781 40.65625-27.21875 65.355468-27.21875 29.035156 0 55.835938 13.726563 73.058594 35.964844 17.222656-22.238281 44.023438-35.964844 73.058594-35.964844 24.917968 0 48.308594 9.769531 65.863281 27.507813 17.386719 17.570312 26.871094 40.824218 26.699219 65.480468-.257813 37.363282-27.582032 77.863282-81.214844 120.375-38.214844 30.292969-75.792969 50.414063-77.375 51.257813-2.199219 1.171875-4.617188 1.753906-7.03125 1.753906zm0 0"
                />
                <path
                    fill="#ff282f"
                    d="m394.921875 118.117188c-17.554687-17.738282-40.945313-27.507813-65.863281-27.507813-28.484375 0-54.808594 13.214844-72.058594 34.710937v231.605469c2.078125-.140625 4.136719-.6875 6.03125-1.695312 1.582031-.84375 39.160156-20.964844 77.375-51.257813 53.632812-42.511718 80.957031-83.011718 81.214844-120.371094.171875-24.660156-9.3125-47.914062-26.699219-65.484374zm0 0"
                />
            </symbol>
        </SvgSpriteWrapper>
    );
};
