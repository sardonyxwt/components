import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    Toolbar,
    ToolbarItem,
    ToolbarRow,
} from '@source/component/layout/toolbar.component';
import { Svg, SvgId } from '@source/component/svg.component';
import { Text, TextFontSize } from '@source/component/text.component';

export type ModalToolbarProps = CommonProps & {
    title?: string;
    onClose?: React.MouseEventHandler;
    useFullTransparentBackground?: boolean;
};

export const ModalToolbar: React.FC<ModalToolbarProps> = (props) => (
    <Toolbar
        id={props.id}
        style={props.style}
        className={props.className}
        isStuck
        useTransparentBackground
        useFullTransparentBackground={props.useFullTransparentBackground}
    >
        {props.children && props.children}
        {!props.children && (
            <ToolbarRow>
                <ToolbarItem isExpandable />
                <ToolbarItem isExpandable>
                    {props.title && (
                        <Text fontSize={TextFontSize.XL}>
                            <b>{props.title}</b>
                        </Text>
                    )}
                </ToolbarItem>
                <ToolbarItem isExpandable>
                    {props.onClose && (
                        <Svg
                            width="32px"
                            height="32px"
                            svgId={SvgId.Close}
                            onClick={props.onClose}
                        />
                    )}
                </ToolbarItem>
            </ToolbarRow>
        )}
    </Toolbar>
);
