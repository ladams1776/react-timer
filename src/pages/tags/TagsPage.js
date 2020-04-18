import React from 'react';
import cn from 'classnames';
import { Form, Field } from 'react-final-form';
import {
    useFlashMessageContext
} from 'hooks'
import styles from './AddTagPage.module.css';




const TagPage = () => {
    const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();


    const submitForm = event => {

        console.log('What is this event?', event.tagName)
        fetch('/tag', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ ...event })
        })
            .then(res => {
                if (res.status === 200) {
                    setSuccessFlashMessage(`Added Tag: ${event.tagName}`)
                } else {
                    setErrorFlashMessage(`Problem creating new tag: ${event.tagName}.`); 
                }
            })
            .catch(error => setErrorFlashMessage(`Problem creating new tag: ${event.tagName}. Error: ${error}`));
    }

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

export default TagPage;