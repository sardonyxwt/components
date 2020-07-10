// TODO add theming
import styled, { css } from 'styled-components';

export const SwitchWrapper = styled.div`
    width: 40px;
    height: 22px;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
`;

export type SwitchSliderProps = {
    isChecked?: boolean;
};

export const SwitchSlider = styled.div<SwitchSliderProps>`
    width: 100%;
    height: 16px;
    position: absolute;
    border-radius: 8px;
    background-color: ${({ isChecked }) => (isChecked ? '#500524' : '#3f414b')};
    transition: background-color 0.3s;
    -webkit-tap-highlight-color: transparent;
`;

export type SwitchCheckboxProps = {
    isChecked?: boolean;
};

export const SwitchCheckbox = styled.div<SwitchCheckboxProps>`
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 12px;
    transform: translateX(0);
    background-color: #92939a;
    transition: background-color, transform 0.3s;
    -webkit-tap-highlight-color: transparent;
    ${({ isChecked }) =>
        isChecked &&
        css`
            transform: translateX(16px);
            background-color: #e03179;
        `}
`;
