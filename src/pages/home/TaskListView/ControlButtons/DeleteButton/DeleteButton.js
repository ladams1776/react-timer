import React from 'react';
import { fetchApiData } from 'utils';
import { useTaskEditContext, useFlashMessageContext, useLoadinSpinnerContext } from 'hooks';
import styles from './DeleteButton.module.css';

const DeleteButton = () => {
    const { updateTasks, tasks } = useTaskEditContext();
    const { setIsLoadin } = useLoadinSpinnerContext();
    const { setSuccessFlashMessage } = useFlashMessageContext();

    const handleDelete = e => {
        e.preventDefault();
        setIsLoadin(true);

        const dispatch = () => {
            setSuccessFlashMessage('Successfully deleted all tasks');
            updateTasks([]);
            setIsLoadin(false);
        };

        (async () => await fetchApiData('tasks', { method: 'DELETE' }, dispatch))();
    };

    return (
        <>
            {!tasks?.length ||
                (<button
                    type="a"
                    className={styles.buttonDelete}
                    onClick={handleDelete}
                    data-test-id="btn-delete" >
                    <span className="glyphicon glyphicon-remove mr-5px"></span>
                Delete
                </button>)
            }
        </>
    )
}

export default DeleteButton;