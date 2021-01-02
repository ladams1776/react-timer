import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import useHomeOnClick from './useHomeOnClick';
import styles from './HomeButton.module.css';

const HomeButton = () => {
    const onClick = useHomeOnClick();
    return <Button className={cn(styles.buttonAdd, "glyphicon glyphicon-home")}
        title="Tags"
        onClick={onClick} 
        data-testid="homeButton"/>
};

export default HomeButton;