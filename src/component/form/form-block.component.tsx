import React from 'react';
import { FormBlockWrapper } from '@source/component/form/form-block.component.styles';

export const FormBlock: React.FC = (props) => (
    <FormBlockWrapper>{props.children}</FormBlockWrapper>
);
