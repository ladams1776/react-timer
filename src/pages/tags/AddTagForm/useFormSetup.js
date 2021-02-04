import { fetchApiData } from 'utils';
import { useBrowserHistory } from 'hooks'
import { flashMessageHandleResponse, useFlashMessageAndIsLoadin } from 'utils';

const useFormSetup = () => {
    const { setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin } = useFlashMessageAndIsLoadin();
    const { push } = useBrowserHistory();

    const onSubmit = ({ _id, description, name }) => {
        console.log('id', _id);
        const dispatch = items => {
            push(`/tags`);
        }

        const config = {
            body: { name, description, id: _id },
            method: _id === undefined ? 'POST' : 'PUT'
        };


        const r = flashMessageHandleResponse(dispatch, setErrorFlashMessage, setSuccessFlashMessage, setIsLoadin, 'Successfully saved tag', 'Failed to save tag');
        setIsLoadin(true);
        fetchApiData('tag', config, r);
    };

    return { onSubmit };
};

export default useFormSetup;