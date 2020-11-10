import { useState } from 'react';
import { fetchApiData } from 'utils';


export const onFormSubmit = (dateTime, setDateTime, taskId) => e => {
    e.preventDefault();
    const config = { body: { id: dateTime.id, date: dateTime.date, minutes: dateTime.minutes }, method: 'PUT' };
    fetchApiData(`task/${taskId}/dateTime/${dateTime.id}`, config, setDateTime);
};

const useForm = (editDateTime, taskId) => {
    const [dateTime, setDateTime] = useState(editDateTime);
    const onSubmit = onFormSubmit(dateTime, setDateTime, taskId);
    return { onSubmit, dateTime, setDateTime };
}

export default useForm;