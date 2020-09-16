import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { fetchApiData } from 'utils';
import styles from './ImportButton.module.css';

const ImportButton = () => {

    // const importDownload = async e => {
    //     e.preventDefault();
    //     console.log('yeah ', e.target.files)
    //     const form = new FormData();
    //     form.append("file", e.target.files[0], e.target.files[0].name);

    //     const response = await fetch(`/api/import`, { method: 'POST', FormData: form });
    //     const data = response.json();
    //     console.log('data: ', data);
    // };

    return (
        <form method="post" encType="multipart/form-data" action="/api/import">
            {/* <Button
                className={cn(styles.importButton, "glyphicon glyphicon-arrow-up mr-5px")}
                data-test-id="btn-import"
                onClick={() => { }}> */}
                <input type="file" name="file" />
            <Button
                className={cn(styles.importButton, "glyphicon glyphicon-arrow-up mr-5px")}
                data-test-id="btn-import"
                onClick={() => { }}
                type="submit"/>
                {/* <input type="submit" value="upload"/> */}
            {/* </Button> */}
        </form>
    );
};

export default ImportButton;