import React from 'react';
import { useRef, CommonProps } from '@sardonyxwt/ligui';
import { Transition } from 'react-transition-group';
import {
    VIDEO_ANIMATION_TIMEOUT,
    VideoSource,
    VideoWrapper,
} from '@source/component/video.component.styles';
import { useRenderRegion } from '@source/hook/render-region.hook';

export type VideoProps = CommonProps & {
    src: string;
    onLoad?: () => void;
    useAutoplay?: boolean;
    useControls?: boolean;
    useLoop?: boolean;
    isPlaysInline?: boolean;
    isFullscreen?: boolean;
    useLazyLoading?: boolean;
};

export const Video: React.FC<VideoProps> = (props) => {
    const videoWrapperRef = useRef<HTMLDivElement>();
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    const [, isInRenderRegionOnce] = useRenderRegion(
        videoWrapperRef.current,
        props.useLazyLoading,
    );

    const onLoadHandler = () => {
        const endRender = () => {
            setIsVideoLoaded(true);
            props.onLoad?.();
        };

        const onRenderStart = () => {
            requestAnimationFrame(endRender);
        };

        requestAnimationFrame(onRenderStart);
    };

    return (
        <Transition in={isVideoLoaded} timeout={VIDEO_ANIMATION_TIMEOUT}>
            {(status) => (
                <VideoWrapper
                    ref={videoWrapperRef}
                    id={props.id}
                    style={props.style}
                    className={props.className}
                    status={status}
                >
                    <VideoSource
                        autoPlay={props.useAutoplay}
                        muted={props.useAutoplay && props.isPlaysInline}
                        loop={props.useLoop}
                        controls={props.useControls}
                        playsInline={props.isPlaysInline}
                        onCanPlay={onLoadHandler}
                    >
                        {(!props.useLazyLoading || isInRenderRegionOnce) && (
                            <source
                                type="video/mp4"
                                src={`${props.src}#t=0.01`}
                            />
                        )}
                    </VideoSource>
                </VideoWrapper>
            )}
        </Transition>
    );
};
