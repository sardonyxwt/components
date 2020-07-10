import React from 'react';
import styled from 'styled-components';
import { LanguageSelect } from '@source';

export default {
    title: '@form/LanguageSelect',
    component: LanguageSelect,
};

const LanguageSelectWrapper = styled.div`
    margin: 24px;
`;

const LanguageSelectStory: React.FC = () => {
    const [value, setValue] = React.useState<string>('ru');

    return (
        <LanguageSelectWrapper>
            <LanguageSelect
                value={value}
                options={['ru', 'ua']}
                onSelect={setValue}
            />
        </LanguageSelectWrapper>
    );
};

export const languageSelect = (): React.ReactNode => <LanguageSelectStory />;
