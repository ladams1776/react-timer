import React from 'react';
import PropType from 'prop-types';

const TextAreaAdapter = ({ input }) => (
    <textarea
        {...input}
        type="textarea"
        cols="80"
        rows="10"
        data-test-id="text-area-adapter"
    />
);

TextAreaAdapter.PropType = {
    input: PropType.object,
};

export default TextAreaAdapter;