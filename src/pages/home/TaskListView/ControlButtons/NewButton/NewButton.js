import React from 'react';
import { useBrowserHistory } from 'hooks';
import styles from './NewButton.module.css';

const NewButton = () => {
  const { push } = useBrowserHistory();

  return <button className={styles.buttonAdd} data-test-id="btn-new"
    onClick={() => {
      push("/task/-1");
      window.location.reload();
    }}>
    <span className="glyphicon glyphicon-edit" />
  </button>
};

export default NewButton;