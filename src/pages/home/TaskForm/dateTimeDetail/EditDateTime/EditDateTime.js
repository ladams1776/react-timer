import React from 'react';
import PropTypes from 'prop-types'

const EditDateTime = ({ id, date, minutes }) => {
    return <form>
        <div>Date: {date}</div>
        <div>Minutes: {minutes}</div>
    </form>
};

EditDateTime.prototype = {
    id: PropTypes.string,
    date: PropTypes.string,
    minutes: PropTypes.number
};

export default EditDateTime;