import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import styles from './EditDateTimeForm.module.css';
const EditDateTimeForm = ({ setEditDateTime, editDateTime, taskId, setIsShowing }) => {
    return <div className={styles.form}>
        <form method="put" data-testid="editDateTimeForm">
            <input type="hidden" name="id" value={editDateTime.id} />

            <div className={styles.date}>
                Date:
                <input value={editDateTime.date}
                    name="date"
                    onChange={e => setEditDateTime({ ...editDateTime, date: e.target.value })} />
            </div>

            <div
                className={styles.minutes}>
                Minutes:
                <input value={editDateTime.minutes}
                    name="minutes"
                    onChange={e => setEditDateTime({ ...editDateTime, minutes: e.target.value })} />
            </div>
            <SubmitButton setEditDateTime={setEditDateTime} editDateTime={editDateTime} taskId={taskId} setIsShowing={setIsShowing}/>
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