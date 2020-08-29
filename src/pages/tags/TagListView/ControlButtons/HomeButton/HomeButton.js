import React from 'react';
import cn from 'classnames';
import { useBrowserHistory } from 'hooks';
import styles from './HomeButton.module.css';

const HomeButton = () => {
    const { push } = useBrowserHistory();
    return <button className={cn(styles.buttonAdd, "glyphicon glyphicon-home")}
        onClick={() => {
            sessionStorage.setItem('LOCATION', '/task/-1');
            push("/task/-1");
        }} />
};

export default HomeButton;