import React from 'react';
import { Button } from 'components';
import { useSubmit } from '../hooks';
import styles from './SubmitButton.module.css';

const SubmitButton = () => {
    const onSubmit = useSubmit();
    return (<Button
        type="submit"
        className={styles.submit}
        onClick={onSubmit}
        testid="submit"
        value="Submit" />);
};

export default SubmitButton;