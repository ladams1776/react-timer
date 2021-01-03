import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { Button } from 'components';
import useSubmit from './useSubmit';
import styles from './EditDateTimeForm.module.css';
const EditDateTimeForm = ({ setEditDateTime, editDateTime, taskId, setIsShowing }) => {
    const onSubmit = useSubmit(editDateTime, setEditDateTime, taskId, setIsShowing);

    return <Form
        onSubmit={onSubmit}
        initialValues={editDateTime}
        render={({ handleSubmit }) => {
            return (
                <form
                    className={styles.form}
                    data-testid="form"
                    onSubmit={handleSubmit}
                    method="PUT">

                    <Field type="hidden" name="id" value={editDateTime.id} component="input" />
                    <div className={styles.field}><label htmlFor="date">Date:</label> <Field type="text" name="date" id="date" value={editDateTime.date} component="input" /></div>
                    <div className={styles.field}><label htmlFor="minutes">Minutes:</label><Field type="text" name="minutes" id="minutes" value={editDateTime.minutes} component="input" /></div>
                    <div className={styles.submitContainer}><Button type="submit" className={styles.submit} value="Submit" /></div>

                </form>)
        }}
    />
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