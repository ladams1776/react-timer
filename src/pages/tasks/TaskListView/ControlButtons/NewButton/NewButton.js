import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import useOnClick from './useOnClick';
import styles from './NewButton.module.css';

const NewButton = () => {
  const addNewTask = useOnClick();

  return <Button
    testid="btn-new"
    className={cn(styles.buttonAdd, "glyphicon glyphicon-edit")}
    title="New Task"
    onClick={addNewTask} />
};

export default NewButton;