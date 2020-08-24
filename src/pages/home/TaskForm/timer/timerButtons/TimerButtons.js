import React from 'react';
import cn from 'classnames';
import Button from 'components/Button';
import styles from './TimerButtons.module.css';

const TimerButtons = ({ time, setTime, isActive = false, setIsActive, children }) => {

    const toggle = () => setIsActive(!isActive);
    /**
     * Haven't figured out why, but some reason this reset button is triggering the form's submission. Going to prevetDefault for now.
     * @param {Object} e 
     */
    const reset = e => {
        e.preventDefault();
        setIsActive(false);
        setTime(0);
    };

    return <div className={cn("navbar navbar-default")}>
        <div className="container-fluid">
            <div className={styles.navbarHeader}>
                <Button
                    className={cn(styles.timerReset)}
                    data-test-id="timerReset"
                    onClick={reset}
                    disabled={time === 0}>
                    <span className={cn(styles.resetIcon, "glyphicon glyphicon-refresh")} />
                </Button>

                {isActive && (
                    <Button className={styles.timerStop}
                        data-test-id="timerStop"
                        onClick={toggle}>
                        <span className={cn(styles.stopIcon, "glyphicon glyphicon-pause")} />
                    </Button>
                )}

                {time !== 0 && !isActive && (
                    <Button className={styles.timerResume}
                        onClick={toggle}>
                        <span className={cn(styles.stopIcon, "glyphicon glyphicon-play")} />
                    </Button>
                )}

                {time === 0 && !isActive && (
                    <Button className={styles.timerResume}
                        onClick={toggle}>
                        <span className={cn(styles.stopIcon, "glyphicon glyphicon-play")} />
                    </Button>
                )}
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    </div>
};

export default TimerButtons;
