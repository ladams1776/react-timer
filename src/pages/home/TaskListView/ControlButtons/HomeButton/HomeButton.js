import React from 'react';
import cn from 'classnames';
import { useBrowserHistory } from 'hooks';
import { Button } from 'components';
import styles from './HomeButton.module.css';

const HomeButton = () => {
    const { push } = useBrowserHistory();
    return <Button className={cn(styles.buttonAdd, "glyphicon glyphicon-home")}
    title="Tags"
        onClick={() => {
            sessionStorage.setItem('LOCATION', '/tag/-1');
            push("/tag/-1");
        }} />
};

export default HomeButton;