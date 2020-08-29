import React from 'react';
import MultiSelect from 'react-multi-select-component';

const MultiSelectAdapter = ({ ...rest }) => <MultiSelect labelledBy={'Select'} {...rest} data-test-id="multi-select" />;

export default MultiSelectAdapter;
