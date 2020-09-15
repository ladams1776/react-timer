import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useBrowserHistory } from 'hooks';
import styles from './HomeButton.module.css';

const HomeButton = () => {
    const { push } = useBrowserHistory();
    return <Button className={cn(styles.buttonAdd, "glyphicon glyphicon-home")}
        onClick={() => {
            sessionStorage.setItem('LOCATION', '/task/-1');
            push("/task/-1");
        }} />
};

export default HomeButton;