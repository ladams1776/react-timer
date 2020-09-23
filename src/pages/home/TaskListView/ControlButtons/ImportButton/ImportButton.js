import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import styles from './ImportButton.module.css';

const ImportButton = () => {
    return (
        <form method="post" encType="multipart/form-data" action="/api/import">
            <input type="file" name="file" />
            <Button
                className={cn(styles.importButton, "glyphicon glyphicon-arrow-up mr-5px")}
                data-test-id="btn-import"
                onClick={() => { }}
                type="submit" />
        </form>
    );
};

export default ImportButton;