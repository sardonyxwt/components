import React from 'react';
import { useRef, CommonProps } from '@sardonyxwt/ligui';
import { Transition } from 'react-transition-group';
import {
    IMAGE_ANIMATION_TIMEOUT,
    ImageSource,
    ImageWrapper,
} from '@source/component/image.component.styles';
import { useRenderRegion } from '@source/hook/render-region.hook';

export type ImageProps = CommonProps & {
    src: string;
    fallbackSrc?: string;
    width?: number | string;
    height?: number | string;
    onLoad?: () => void;
    onError?: () => void;
    onClick?: (evt: React.MouseEvent<HTMLImageElement>) => void;
    useLazyLoading?: boolean;
    usePreviewBackground?: boolean;
};

const checkIsImgLoaded = (imgElement: HTMLImageElement) => {
    return imgElement?.complete && imgElement?.naturalHeight !== 0;
};

export const Image: React.FC<ImageProps> = (props) => {
    const imgRef = useRef<HTMLImageElement>();
    const [isError, setIsError] = React.useState(false);
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);

    const [, isInRenderRegionOnce] = useRenderRegion(
        imgRef.current,
        props.useLazyLoading,
        true,
        [imgRef.current],
    );

    const onLoadHandler = () => {
        const endRender = () => {
            setIsImageLoaded(true);
            props.onLoad?.();
        };

        function onRenderStart() {
            requestAnimationFrame(endRender);
        }

        requestAnimationFrame(onRenderStart);
    };

    const onErrorHandler = ({
        currentTarget,
    }: React.MouseEvent<HTMLImageElement>) => {
        if (props.fallbackSrc) {
            currentTarget.src = props.fallbackSrc;
            setIsError(true);
        }
        props.onError?.();
    };

    React.useEffect(() => {
        setIsError(false);
    }, [props.src]);

    React.useEffect(() => {
        if (isImageLoaded) {
            return;
        }
        checkIsImgLoaded(imgRef.current) && onLoadHandler();
    }, [imgRef.current]);

    const isRatioUsed =
        typeof props.width === 'number' && typeof props.height === 'number';

    return (
        <Transition in={isImageLoaded} timeout={IMAGE_ANIMATION_TIMEOUT}>
            {(status) => (
                <ImageWrapper
                    id={props.id}
                    style={props.style}
                    className={props.className}
                    status={status}
                    isError={isError}
                    width={props.width}
                    height={props.height}
                    useRatio={isRatioUsed}
                    usePreviewBackground={props.usePreviewBackground}
                >
                    <ImageSource
                        ref={imgRef}
                        src={
                            !props.useLazyLoading || isInRenderRegionOnce
                                ? props.src
                                : null
                        }
                        alt="Load Error"
                        onLoad={onLoadHandler}
                        onError={onErrorHandler}
                        onClick={props.onClick}
                    />
                </ImageWrapper>
            )}
        </Transition>
    );
};

Image.defaultProps = {
    fallbackSrc: 'public/img/image-alt.png',
};
