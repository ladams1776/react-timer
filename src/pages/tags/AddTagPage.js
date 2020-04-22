import React from 'react';
import cn from 'classnames';
import { Form, Field } from 'react-final-form';
import { useFlashMessageContext, useLoadinSpinnerContext } from 'hooks'
import styles from './AddTagPage.module.css'

export const submitForm = (setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin) => async (event) => {
    setIsLoadin(true);
    try {
        const result = await fetch('/api/tag', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ ...event })
        });
        const tag = await result.json();
        const okStatus = tag.status !== 500;

        //@TODO: Let's get these values from the returned tag
        okStatus
            ? setSuccessFlashMessage(`Added Tag: ${tag.name}`)
            : setErrorFlashMessage(`Problem creating new tag: ${event.name}`);

    } catch (err) {
        setIsLoadin(false);
        setErrorFlashMessage(`Problem creating new tag: ${event.name}. Error: ${err}`);
    }

};

const AddTagePage = () => {
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();
    const { setIsLoadin } = useLoadinSpinnerContext();

    const onSubmitty = submitForm(setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin);

    return (
        <Form onSubmit={onSubmitty}
        render={({handleSubmit, pristine}) => 
            <form onSubmit={handleSubmit}>
            <div className={styles.addTagPageForm}>
                <h3>Add a New Tag</h3>
                <Field
                    name="name"
                    component="input"
                    placeholder="Tag's Name"
                    className={styles.name}
                    autoFocus
                />
                <Field
                    name="description"
                    component="textarea"
                    placeholder={"Tag's Description"}
                    cols="80"
                    rows="10"
                    // disabled={pristine}
                    className={styles.description}
                />
                <button type="submit" className={cn("btn", "btn-primary", styles.submit)} data-test-id="addTagPageSubmit">Submit</button>
            </div>
        </form>
        }/>
    );
}

export default AddTagePage;