import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useBrowserHistory, useFlashMessageContext } from 'hooks';
import { fetchApiData } from "utils";
import styles from './DropZone.module.css'


const DropZone = ({ onClick }) => {
    const { setSuccessFlashMessage } = useFlashMessageContext();
    const { push } = useBrowserHistory();
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        //@TODO: Could error message in these cases
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = JSON.parse(reader.result);
            fetchApiData('import', { body: binaryStr, method: 'POST' }, () => {
                onClick();
                setSuccessFlashMessage('Successfully Saved');
                push("/task/-1");
            });
        }
        reader.readAsBinaryString(acceptedFiles[0]);
    });
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className={styles.innerModalContent}>
            <input {...getInputProps()} className={styles.innerContainer} />
            {
                isDragActive
                    ? <p className={styles.dropText}>Drop the files here...</p>
                    : <p className={styles.dropText}>Drag 'n' drop files here, or click to select file</p>
            }
        </div>);
};

export default DropZone;