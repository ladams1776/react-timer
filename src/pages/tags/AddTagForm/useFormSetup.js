import { useDispatch } from 'react-redux';
import { putTag } from 'redux/actionCreators/actions';

const useFormSetup = () => {
    const dispatch = useDispatch();

    const onSubmit = ({ _id, description, name }) => {
        const body = { name, description, _id };
        console.log('body: ', body);
        dispatch(putTag(body));
    };

    return { onSubmit };
};

export default useFormSetup;