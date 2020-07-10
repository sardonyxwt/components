import React from 'react';
import ReactDOM from 'react-dom';
import { useMountElement } from '@source/hook/mount-element.hook';
import {
    PRELOADER_TRANSITION_DELAY,
    PRELOADER_TRANSITION_DURATION,
    PreloaderArea,
    PreloaderCircle,
    PreloaderWrapper,
} from '@source/component/preloader.component.styles';

export type PreloaderProps = {
    isActive: boolean;
};

export const Preloader: React.FC<PreloaderProps> = (props) => {
    const [isNeedToRender, setIsNeedToRender] = React.useState(props.isActive);
    const mountEl = useMountElement(isNeedToRender);

    React.useEffect(() => {
        if (props.isActive) {
            setIsNeedToRender(true);
            return;
        }
        const timeoutId = setTimeout(
            () => setIsNeedToRender(false),
            PRELOADER_TRANSITION_DURATION + PRELOADER_TRANSITION_DELAY,
        );
        return () => clearTimeout(timeoutId);
    }, [props.isActive]);

    if (!isNeedToRender) {
        return null;
    }

    const preloader = (
        <PreloaderWrapper isActive={props.isActive}>
            <PreloaderArea>
                <PreloaderCircle />
                <PreloaderCircle />
            </PreloaderArea>
        </PreloaderWrapper>
    );

    return ReactDOM.createPortal(preloader, mountEl);
};
