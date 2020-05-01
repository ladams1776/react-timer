import React from 'react';
import { MultiSelectDropdown } from 'components';
import useTagContext from '../hooks/useTagContext';
import useFetchTagOptions from '../hooks/useFetchTagOptions';
import styles from './TagDropdown.module.css';

//@TODO: Make test for this
const TagDropdown = () => {
    useFetchTagOptions();
    const { tags } = useTagContext();

    return tags && <div className={styles.dropDown}>
        <div className={styles.tagsDropDown}>
            <MultiSelectDropdown data={tags} data-test-id="tagDropdown" />
        </div>
    </div>
};

export default TagDropdown;