import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { fetchApiData } from 'utils';
import styles from './ImportButton.module.css';

const ImportButton = tasks => {

    const importDownload = e => {
        e.preventDefault();
        fetchApiData('import', { method: 'POST', body: e.target.files[0] }, () => {});
    };

    return (<>
        {tasks.length || (
            <Button
                className={cn(styles.importButton, "glyphicon glyphicon-arrow-up mr-5px")}
                data-test-id="btn-import"
                onClick={() => { }}>
                <input type="file" name="file" className={styles.file} onChange={importDownload} />
            </Button>)
        }
    </>);
};

export default ImportButton;