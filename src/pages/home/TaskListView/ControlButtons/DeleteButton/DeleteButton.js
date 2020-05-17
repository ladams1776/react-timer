import React from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext, useTaskEditContext } from 'hooks';
import useDispatch from './useDispatch';
import styles from './DeleteButton.module.css';

const DeleteButton = () => {
    const { tasks } = useTaskEditContext();
    const { setIsLoadin } = useLoadinSpinnerContext();
    const dispatch = useDispatch();

    const handleDelete = async e => {
        e.preventDefault();
        setIsLoadin(true);
        await fetchApiData('tasks', { method: 'DELETE' }, dispatch);
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