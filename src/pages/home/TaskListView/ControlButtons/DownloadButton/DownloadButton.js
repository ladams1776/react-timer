import React from 'react';
import cn from 'classnames';
import { writeJsonFile } from './writeJsonFile';
import useTaskAssembler from './useTaskAssembler';
import { Button } from 'components';
import styles from './DownloadButton.module.css';

const useHandleDownload = (tasks) => {
    const assembleTask = useTaskAssembler(tasks);
    return () => {
        writeJsonFile(assembleTask());
    };
};

const DownloadButton = tasks => {
    const handleDownload = useHandleDownload(tasks);

    return (<>
            {tasks.length || (
                <Button
                    title="Download Tasks"
                    type="a"
                    className={cn(styles.buttonDownload, "glyphicon glyphicon-download-alt")}
                    onClick={handleDownload}
                    data-test-id="btn-download">
                </Button>)
            }
        </>);
};

export default DownloadButton;