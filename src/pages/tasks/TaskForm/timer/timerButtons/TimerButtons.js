import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button } from 'components';
import styles from './TimerButtons.module.css';

const TimerButtons = ({ time, isActive = false, setIsActive, children }) => {
    const toggle = () => setIsActive(!isActive);

    return <div className={cn("navbar navbar-default")}>
        <div className="container-fluid">
            <div className={styles.navbarHeader}>
                
                {isActive && (<Button
                    className={cn(styles.timerStop, styles.stopIcon, "glyphicon glyphicon-pause")}
                    title="Stop"
                    testid="stop"
                    onClick={toggle} />
                )}

                {time !== 0 && !isActive && (<Button
                    className={cn(styles.timerResume, styles.stopIcon, "glyphicon glyphicon-play")}
                    title="Resume"
                    testid="resume"
                    onClick={() => setIsActive(!isActive)} />
                )}

                {time === 0 && !isActive && (<Button
                    className={cn(styles.timerStart, styles.stopIcon, "glyphicon glyphicon-play")}
                    title="Start"
                    testid="start"
                    onClick={toggle} />
                )}

                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    </div>
};

TimerButtons.propTypes = {
    time: PropTypes.number,
    isActive: PropTypes.bool.isRequired,
    setIsActive: PropTypes.func.isRequired,
    children: PropTypes.element,
};

export default TimerButtons;
