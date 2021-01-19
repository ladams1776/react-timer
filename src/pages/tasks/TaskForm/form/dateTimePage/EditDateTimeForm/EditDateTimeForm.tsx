import React from 'react';
import { Field, Form } from 'react-final-form';
import { minSecValidator, utcFormatValidator } from 'forms/validators';
import { Button } from 'components';
import useSubmit from './useSubmit';

import styles from './EditDateTimeForm.module.css';
import { EditDateTimeInterface } from 'interfaces/pages/tasks/Task';
import formatMinsAndSecsForDisplay from 'utils/formatters/formatMinsAndSecsForDisplay';

interface EditDateTimeFormProp {
  editDateTime: EditDateTimeInterface;
  taskId: string;
  setIsShowingEditDateTimeForm: (setIsShowing: boolean) => void;
}

const EditDateTimeForm: React.FC<EditDateTimeFormProp> = ({ editDateTime, taskId, setIsShowingEditDateTimeForm }) => {
  const onSubmit = useSubmit(taskId, setIsShowingEditDateTimeForm);
  const minsAndSecs = formatMinsAndSecsForDisplay(editDateTime.minutes);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ ...editDateTime, minutes: minsAndSecs }}
      render={({ handleSubmit, submitting, pristine }) => {
        return (
          <form className={styles.form} data-testid="form" onSubmit={handleSubmit} method="PUT">
            <Field type="hidden" name="id" value={editDateTime.id} component="input" />
            <div className={styles.field}>
              <Field name="date" validate={utcFormatValidator} >
                {({ input, meta }) => {
                  return (
                    <div>
                      <label htmlFor="date">Date</label>
                      <input {...input} type="text" id="date" className={styles.input} />
                      {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                    </div>
                  );
                }}
              </Field>
            </div>
            <Field name="minutes" validate={minSecValidator}>
              {({ input, meta }) => {
                return (
                  <div className={styles.field}>
                    <label htmlFor="minutes">Minutes</label>
                    <input {...input} type="text" id="minutes" className={styles.input} />
                    {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
                  </div>
                );
              }}
            </Field>
            <div className={styles.submitContainer}>
              <Button type="submit" className={styles.submit} value="Submit" disabled={submitting || pristine} />
            </div>
          </form>
        );
      }}
    />
  );
};

export default EditDateTimeForm;
