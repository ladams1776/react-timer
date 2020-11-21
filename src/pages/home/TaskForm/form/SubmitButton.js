import React from 'react';
import { Button } from 'components';
import { useSubmit, useTagContext } from '../hooks';


const SubmitButton = ({className}) => {
    const { allTags } = useTagContext();
    const onSubmit = useSubmit(allTags);

    return (<Button
        type="submit"
        className={className}
        onClick={onSubmit}
        data-test-id="submit"
        title="Submit">
        Submit
    </Button>);
};

export default SubmitButton;