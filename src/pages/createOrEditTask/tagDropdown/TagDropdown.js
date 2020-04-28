import React from 'react';
import { Field } from 'react-final-form';
// import { useFetchProjectOptions } from 'hooks';
import styles from './TagDropdown.module.css';

const tags = [
    {
        _id: "1",
        name: 'tag 1 name'
    },
    {
        _id: "2",
        name: 'tag 2 name'
    },
    {
        _id: "3",
        name: 'tag 3 name'
    },
    {
        _id: "4",
        name: 'tag 3 name'
    },
]

//@TODO: Make test for this
const TagDropdown = () => {
    // const projectOptions = useFetchProjectOptions();

    return <div className={styles.dropDown}>
        <div className={styles.tagsDropDown}>
            <Field
                name="tags"
                component="Select"
                displayEmpty
                multiple>
                {tags.map(tag => <option value={tag._id} key={tag._id}>{tag.name}</option>)}
            </Field>
        </div>
    </div>
};

export default TagDropdown;