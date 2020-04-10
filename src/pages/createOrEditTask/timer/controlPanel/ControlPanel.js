import React from 'react';
import cn from 'classnames';
import Button from 'components/Button';
import { useUpdateCurrentTime } from '../hooks';
import styles from './ControlPanel.module.css';
import { Link } from 'react-router-dom';

const ControlPanel = ({ time, setTime, isActive = false, setIsActive, children }) => {
    const toggle = () => setIsActive(!isActive);

    useUpdateCurrentTime(time, isActive, setTime);

    const reset = () => {
        setIsActive(false);
        setTime(0);
    };

    return <div class={cn("navbar navbar-default")}>
        <div class="container-fluid">
            <div className={styles.navbarHeader}>
                <Link className={cn(styles.backButton, "backButton", "glyphicon glyphicon-arrow-left")} to="/" />

                <Button
                    className={cn(styles.timerReset)}
                    data-test-id="timerReset"
                    onClick={reset}
                    disabled={time === 0}
                    value="reset" />

                {isActive && (
                    <Button className={styles.timerStop}
                        data-test-id="timerStop"
                        onClick={toggle}
                        value="stop" />
                )}

                {time !== 0 && !isActive && (
                    <Button className={styles.timerResume}
                        onClick={toggle}
                        value="resume" />
                )}

                {time === 0 && !isActive && (
                    <Button className={styles.timerResume}
                        onClick={toggle}
                        value="start" />
                )}
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    </div>
};

export default ControlPanel;
