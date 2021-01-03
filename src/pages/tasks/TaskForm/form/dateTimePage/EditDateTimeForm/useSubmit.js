import { fetchApiData } from 'utils';
//@TODO: Redux this!
const useSubmit = (dateTime, setDateTime, taskId, setIsShowing) => {
    const dispatch = e => {
        setDateTime(e);
        setIsShowing(false);
    };
    return ({ id, date, minutes }) => {
        const config = {
            body: {
                id,
                date,
                minutes,
            },
            method: 'PUT'
        };
        fetchApiData(`task/${taskId}/dateTime/${dateTime.id}`, config, dispatch);
    };
};

export default useSubmit;