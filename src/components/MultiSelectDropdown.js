import React from 'react';
import PropType from 'prop-types';
import { Field } from 'react-final-form';

const MultiSelectDropdown = ({ data = [] }) => (
    <Field
        name="tags"
        component="Select"
        displayEmpty
        multiple>
        {data.map(d => <option value={d._id} key={d._id} data-test-id="multi-select-dropdown">{d.name}</option>)}
    </Field>
);

MultiSelectDropdown.PropType = {
    data: PropType.array,
};

export default MultiSelectDropdown;