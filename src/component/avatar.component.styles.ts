import styled, { css, DefaultTheme } from 'styled-components';
import { Image } from '@source/component/image.component';
import { ImageSource } from '@source/component/image.component.styles';

export type AvatarWrapperProps = {
    size?: number;
};

const avatarGradientMixin = (theme: DefaultTheme) => {
    const from = theme.palette.accent;
    const to = theme.palette.secondAccent;
    return css`
        radial-gradient(circle at top left, ${from}, ${to});
    `;
};

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
    border-radius: 50%;
    box-sizing: border-box;

    ${({ size, theme }) => css`
        padding: ${Math.ceil(size / 64)}px;
        width: ${!!size ? `${size}px` : `auto`};
        height: ${!!size ? `${size}px` : `auto`};
        background-image: ${avatarGradientMixin(theme)};
        ${() => AvatarSource} {
            border: solid ${Math.ceil(size / 64)}px
                ${({ theme }) => theme.palette.root};
        }
    `};
`;

export const AvatarSource = styled(Image)`
    border-radius: 50%;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    ${ImageSource} {
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
`;
