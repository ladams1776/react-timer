import React from 'react';
import { writeJsonFile } from './writeJsonFile';
import useTaskAssembler from './useTaskAssembler';
import { Button } from 'components';
import styles from './DownloadButton.module.css';

const DownloadButton = tasks => {
    const assembleTask = useTaskAssembler(tasks);

    const handleDownload = () => {
        writeJsonFile(assembleTask());
    };

    return (
        <>
            {tasks.length || (
                <Button
                    type="a"
                    className={styles.buttonDownload}
                    onClick={handleDownload}
                    data-test-id="btn-download">
                    <span className="glyphicon glyphicon-download-alt mr-5px"></span>
                </Button>)
            }
        </>);
};

export default DownloadButton;