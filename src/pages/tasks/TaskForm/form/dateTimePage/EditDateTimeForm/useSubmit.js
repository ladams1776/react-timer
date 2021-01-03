import { fetchApiData } from 'utils';

const useSubmit = (dateTime, setDateTime, taskId, setIsShowing) => {
    const dispatch = e => {
        setDateTime(e);
        setIsShowing(false);
    };
    return () => {
        const config = { body: { id: dateTime.id, date: dateTime.date, minutes: dateTime.minutes }, method: 'PUT' };
        fetchApiData(`task/${taskId}/dateTime/${dateTime.id}`, config, dispatch);
    };
};

export default useSubmit;