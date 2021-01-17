import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'components';
import useSubmit from './useSubmit';
import styles from './EditDateTimeForm.module.css';

interface EditDateTime {
    id: string;
    date: string;
    minutes: number;
  };

interface EditDateTimeFormProp {
  editDateTime: EditDateTime;
  taskId: string;
  setIsShowingEditDateTimeForm: (setIsShowing: boolean) => void;
}

const EditDateTimeForm: React.FC<EditDateTimeFormProp> = ({ editDateTime, taskId, setIsShowingEditDateTimeForm }) => {
  const onSubmit = useSubmit(editDateTime, taskId, setIsShowingEditDateTimeForm);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={editDateTime}
      render={({ handleSubmit }) => {
        return (
          <form className={styles.form} data-testid="form" onSubmit={handleSubmit} method="PUT">
            <Field type="hidden" name="id" value={editDateTime.id} component="input" />
            <div className={styles.field}>
              <label htmlFor="date">Date:</label> <Field type="text" name="date" id="date" value={editDateTime.date} component="input" />
            </div>
            <div className={styles.field}>
              <label htmlFor="minutes">Minutes:</label>
              <Field type="text" name="minutes" id="minutes" value={editDateTime.minutes} component="input" />
            </div>
            <div className={styles.submitContainer}>
              <Button type="submit" className={styles.submit} value="Submit" />
            </div>
          </form>
        );
      }}
    />
  );
};

export default EditDateTimeForm;