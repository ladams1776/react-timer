import React from 'react';
import { useBrowserHistory } from 'hooks';
import styles from './NewButton.module.css';

const NewButton = () => {
    const { push } = useBrowserHistory();

    return <div className={styles.buttonAdd} data-test-id="btn-new"
        onClick={() => { push("/tags/-1") }}>
        <span className="glyphicon glyphicon-plus mr-5px" />
    New Task
  </div>;
};

export default NewButton;