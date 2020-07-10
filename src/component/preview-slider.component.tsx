import React from 'react';
import { CommonProps } from '@sardonyxwt/ligui';
import {
    PreviewSliderContainer,
    PreviewSliderVideo,
    PreviewSliderWrapper,
} from '@source/component/preview-slider.component.styles';
import { Spacer, SpacerType } from '@source/component/layout/spacer.component';

export type PreviewSliderProps = CommonProps & {
    sources?: string[];
    useLazyLoading?: boolean;
};

export const PreviewSlider: React.FC<PreviewSliderProps> = (props) => {
    const hasArchivePreviewSources = props.sources.length > 0;

    if (!hasArchivePreviewSources) {
        return null;
    }

    return (
        <PreviewSliderWrapper
            id={props.id}
            style={props.style}
            className={props.className}
        >
            <PreviewSliderContainer>
                <Spacer type={SpacerType.Horizontal} />
                {props.sources.map((source) => (
                    <React.Fragment key={source}>
                        <PreviewSliderVideo
                            src={source}
                            useAutoplay
                            useLoop
                            isPlaysInline
                            useLazyLoading={props.useLazyLoading}
                        />
                        <Spacer type={SpacerType.Horizontal} />
                    </React.Fragment>
                ))}
            </PreviewSliderContainer>
        </PreviewSliderWrapper>
    );
};

PreviewSlider.defaultProps = {
    sources: [],
};
