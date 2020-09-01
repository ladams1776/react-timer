import React from 'react';
import { useBrowserHistory } from 'hooks';
import { Button } from 'components';
import styles from './NewButton.module.css';

const NewButton = () => {
  const { push } = useBrowserHistory();

  return <Button className={styles.buttonAdd} data-test-id="btn-new"
    onClick={() => {
      push("/tag/-1");
      window.location.reload();
    }}>
    <span className="glyphicon glyphicon-edit" />
  </Button>;
};

export default NewButton;