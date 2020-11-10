import React from 'react';
import PropTypes from 'prop-types'
import styles from './EditDateTimeForm.module.css';
import useForm from './useForm';

const EditDateTimeForm = ({ editDateTime, taskId }) => {
    const { onSubmit, dateTime, setDateTime } = useForm(editDateTime, taskId);

    return <div className={styles.form}>
        <form data-testid="editDateTimeForm">
            <input type="hidden" name="id" value={dateTime.id} />
            <div className={styles.date}>Date: <input value={dateTime.date} name="date" onChange={e => setDateTime({ ...dateTime, date: e.target.value })} /></div>
            <div className={styles.minutes}>Minutes: <input value={dateTime.minutes} name="minutes" onChange={e => setDateTime({ ...dateTime, minutes: e.target.value })} /></div>
            <button type="submit" className={styles.submit} onClick={onSubmit}>Submit</button>
        </form>
    </div>
};

EditDateTimeForm.prototype = {
    taskId: PropTypes.string,
    editDateTime: PropTypes.exact({
        id: PropTypes.string,
        date: PropTypes.string,
        minutes: PropTypes.number
    })
};

export default EditDateTimeForm;