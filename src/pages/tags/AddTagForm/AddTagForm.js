import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useSetCurrentLocation } from 'hooks'
import useFetchTagById from './useFetchTagById';
import useFormSetup from './useFormSetup';
import styles from './AddTagForm.module.css';
import useFetchTagByIdDispatch from './useFetchTagByIdDispatch';
import { useSelector } from 'react-redux';


const useD = () => {
    return useSelector(state => {
        return state?.tags?.tagById || {}
    });
};

const AddTagePage = ({ tagId, className }) => {
    useSetCurrentLocation(`/tag/${tagId}`);
    useFetchTagByIdDispatch(tagId);
    const tag = useD();
    console.log('tag ', tag)
    const { onSubmit, setName, setDescription, nameRef, descriptionRef, idRef } = useFormSetup(tagId);
    // useFetchTagById(tagId, setTag);

    return (
        <div className={styles.container}>
            <form
                data-test-id="form"
                method={tag.id === -1 ? 'POST' : 'PUT'}
                className={styles.form}>
                <h3>Add a New Tag</h3>
                <input name="id" type="hidden" value={tag.id} ref={idRef} />
                <input
                    name="name"
                    onChange={e => setName(e.target.value)}
                    component="input"
                    defaultValue={tag?.name}
                    className={styles.name}
                    autoFocus
                    type="text"
                    ref={nameRef}
                />
                <textarea
                    name="description"
                    placeholder={"Tag's Description"}
                    onChange={e => setDescription(e.target.value)}
                    cols="80"
                    rows="10"
                    defaultValue={tag?.description}
                    className={styles.description}
                    ref={descriptionRef}
                />
                <Button type="submit"
                    onClick={onSubmit}
                    className={cn("btn", "btn-primary", styles.submit)}
                    data-test-id="addTagPageSubmit"
                >
                    Submit
                    </Button>
            </form>
        </div>
    );
}

export default AddTagePage;