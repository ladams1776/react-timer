import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import useSubmit from './useSubmit';
import styles from './EditDateTimeForm.module.css';

const SubmitButton = ({ setEditDateTime, editDateTime, taskId, setIsShowing }) => {
    const onSubmit = useSubmit(editDateTime, setEditDateTime, taskId, setIsShowing);

    return (<Button
        id={taskId}
        type="submit"
        className={cn("btn", "btn-primary", styles.submit)}
        onClick={onSubmit}
        value="Submit" />
    );
};

export default SubmitButton;