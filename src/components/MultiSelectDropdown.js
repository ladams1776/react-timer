import React from 'react';
import PropType from 'prop-types';
import { Field } from 'react-final-form';

const MultiSelectDropdown = ({ data = [] }) => {
    const defaultValueWhenNoData = {
        _id: 1,
        name: 'No data'
    }

    return <Field
        name="tags"
        component="select"
        type="select"
        displayempty={defaultValueWhenNoData}
        multiple>
        {data.map(d => <option value={d._id} key={d._id} data-test-id="multi-select-dropdown">{d.name}</option>)}
    </Field>
};

MultiSelectDropdown.PropType = {
    data: PropType.array,
};

export default MultiSelectDropdown;