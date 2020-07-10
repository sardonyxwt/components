import styled, { keyframes } from 'styled-components';
import { Svg, SvgId } from '@source/component/svg.component';

const tooltipInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const TooltipWrapper = styled.div`
    z-index: 1001;
    animation-name: ${tooltipInAnimation};
    animation-duration: 0.3s;
    position: absolute;
`;

export const TooltipContent = styled.div`
    background: ${({ theme }) => theme.palette.element};
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0 2px 10px #05060a;
    padding: 12px 14px;
    position: relative;
    max-width: 80vw;
`;

export const TooltipClose = styled(Svg).attrs({
    svgId: SvgId.Close,
    size: '14px',
})`
    display: block;
    margin-left: auto;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.outline};
    padding: 3px;
`;
