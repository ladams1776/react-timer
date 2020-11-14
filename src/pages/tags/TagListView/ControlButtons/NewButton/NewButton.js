import React from 'react';
import cn from 'classnames';
import { useBrowserHistory } from 'hooks';
import { Button } from 'components';
import styles from './NewButton.module.css';

const NewButton = () => {
  const { push } = useBrowserHistory();

  return <Button data-test-id="btn-new"
    className={cn(styles.buttonAdd, "glyphicon glyphicon-edit")}
    onClick={() => {
      push("/tag/-1");
      window.location.reload();
    }} />;
};

export default NewButton;