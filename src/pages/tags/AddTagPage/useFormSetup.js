import { useState, useRef } from 'react';
import { fetchApiData } from 'utils';
import { useBrowserHistory } from 'hooks'
import { flashMessageHandleResponse, useFlashMessageAndIsLoadin } from 'utils';

const useFormSetup = (tagId) => {
    const { setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin } = useFlashMessageAndIsLoadin();
    const { push } = useBrowserHistory();

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const idRef = useRef(null);

    const [tag, setTag] = useState({ _id: tagId });
    /* eslint-disable-next-line no-unused-vars */
    const [name, setName] = useState(tag?.name);
    /* eslint-disable-next-line no-unused-vars */
    const [description, setDescription] = useState(tag?.description);

    const submit = (setTag, nameRef, descriptionRef, idRef, push) => async (event) => {
        event.preventDefault();
        const dispatch = items => {
            setTag(items);
            push(`/tags`);
        }
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const id = idRef.current.value;
        const config = {
            body: { name, description, id },
            method: id !== "-1" ? 'PUT' : 'POST'
        };


        const r = flashMessageHandleResponse(dispatch, setErrorFlashMessage, setSuccessFlashMessage, setIsLoadin, 'Successfully saved tag', 'Failed to save tag');
        setIsLoadin(true);
        fetchApiData('tag', config, r);
    };

    const onSubmit = submit(setTag, nameRef, descriptionRef, idRef, push);


    return { onSubmit, setName, setDescription, setTag, tag, nameRef, descriptionRef, idRef };
};

export default useFormSetup;