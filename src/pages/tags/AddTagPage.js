import React from 'react';
import cn from 'classnames';
import { Form, Field } from 'react-final-form';
import { useFlashMessageContext, useLoadinSpinnerContext } from 'hooks'
import styles from './AddTagPage.module.css'

const AddTagePage = () => {
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();
    const { setIsLoadin } = useLoadinSpinnerContext();

    const submitForm = async (event) => {
        console.log('What is this event?', event.tagName);
        setIsLoadin(true);
        try {
            const result = await fetch('/api/tag', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ ...event })
            });
            const tag = await result.json();
            const okStatus = tag.status === 200;

            okStatus
                ? setSuccessFlashMessage(`Added Tag: ${event.tagName}`)
                : setErrorFlashMessage(`Problem creating new tag: ${event.tagName}.`);

        } catch (err) {
            setErrorFlashMessage(`Problem creating new tag: ${event.tagName}. Error: ${err}`);
        }
    };

    return (
        <Form onSubmit={submitForm}
            render={({ handleSubmit, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.addTagPageForm}>
                        <h3>Add a New Tag</h3>
                        <Field
                            name="tagName"
                            component="input"
                            placeholder="Tag's Name"
                            className={styles.tagName}
                            autoFocus
                        />
                        <Field
                            name="tagDescription"
                            component="textarea"
                            placeholder={!pristine ? "Tag's Description" : 'Need a Tag Name'}
                            cols="80"
                            rows="10"
                            disabled={pristine}
                            className={styles.tagDescription}
                        />
                        <button type="submit" className={cn("btn", "btn-primary", styles.submit)} disabled={pristine}>Submit</button>
                    </div>
                </form>
            )} />
    );
}

export default AddTagePage;