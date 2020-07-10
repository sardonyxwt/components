import React from 'react';
import moment from 'moment';
import { useRef, CommonProps } from '@sardonyxwt/ligui';
import {
    FooterCopyright,
    FooterWrapper,
} from '@source/component/layout/footer.component.styles';
import { Spacer } from '@source/component/layout/spacer.component';
import { useStickyBottom } from '@source/hook/sticky-bottom.hook';

export type FooterProps = CommonProps & {
    copyright: string;
};

export const Footer: React.FC<FooterProps> = (props) => {
    const footerRef = useRef<HTMLDivElement>();
    const isPushedBottom = useStickyBottom(footerRef.current, true, true);

    return (
        <FooterWrapper
            ref={footerRef}
            id={props.id}
            style={props.style}
            className={props.className}
            isReady={!!footerRef.current}
            isPushedBottom={isPushedBottom}
        >
            <Spacer />
            <FooterCopyright>
                <span>
                    {`Copyright © ${moment().year()} All Rights Reserved by`}
                    <br />
                    {props.copyright}
                </span>
            </FooterCopyright>
            <Spacer />
        </FooterWrapper>
    );
};
