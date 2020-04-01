import React from 'react';
import ReactLoading from 'react-loading';
import { useLoadinSpinnerContext } from 'hooks';
import styles from './LoadinSpinner.module.css';

const LoadinSpinner = () => {
    const { isLoadin } = useLoadinSpinnerContext();

    return isLoadin ? (<div className={styles.reactLoadin}>
        <div className={styles.reactLoadinContent}>
            <ReactLoading type="bars" color="#000" />
        </div>
    </div>) : []
};

export default LoadinSpinner;