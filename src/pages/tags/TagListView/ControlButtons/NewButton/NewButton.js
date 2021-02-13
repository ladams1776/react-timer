import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import styles from './NewButton.module.css';
import { postTag } from 'redux/actionCreators/actions';

const NewButton = () => {
  const dispatch = useDispatch();

  return <Button data-test-id="btn-new"
    className={cn(styles.buttonAdd, "glyphicon glyphicon-edit")}
    onClick={() => {
      dispatch(postTag({ description: "", name: "" }));
      window.location.reload();
    }} />;
};

export default NewButton;