import React from 'react';
import PropType from 'prop-types';
import MultiSelect from "react-multi-select-component";

//@TODO: Need a test for this
const MultiSelectAdapter = ({ input, meta, ...rest }) => {
    const onChange = event => input.onChange(event);

    return (
        <MultiSelect
            labelledBy={"Select"}
            {...input}
            {...rest}
            onChange={onChange}
            errorText={meta.touched ? meta.error : ''}
        />
    )
};

MultiSelectAdapter.PropType = {
    input: PropType.object,
    meta: PropType.object,
};

export default MultiSelectAdapter;