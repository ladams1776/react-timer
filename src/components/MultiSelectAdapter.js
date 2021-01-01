import React from 'react';
import MultiSelect from 'react-multi-select-component';
import { useTagTransformer } from '../pages/home/TaskForm/hooks';

const MultiSelectAdapter = ({ ...rest }) => {
    const { onChange, value } = rest.input;
    const values = useTagTransformer(value);

    return <MultiSelect
        {...rest}
        labelledBy={'Select'}
        value={values}
        onChange={onChange}
        data-test-id="multi-select"
    />;
};

export default MultiSelectAdapter;
