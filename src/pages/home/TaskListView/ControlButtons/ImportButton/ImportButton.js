import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import styles from './ImportButton.module.css';

const ImportButton = tasks => {
    const importDownload = () => {

    };

    return (
        <>
            {tasks.length || (
                <Button
                    className={cn(styles.importButton, "glyphicon glyphicon-arrow-up mr-5px")}
                    onClick={importDownload}
                    data-test-id="btn-import">
                    <input type="file" name="file" className={styles.file}/>
                </Button>)
            }
        </>);
};

export default ImportButton;