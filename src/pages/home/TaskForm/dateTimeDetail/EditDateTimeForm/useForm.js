import { useState } from 'react';
import { fetchApiData } from 'utils';

export const onFormSubmit = (dateTime, setDateTime) => e => {
    e.preventDefault();
    const config = { body: { id: dateTime.id, date: dateTime.date, minutes: dateTime.minutes }, method: 'PUT' };
    fetchApiData(`dateTime/${dateTime.id}`, config, setDateTime);
};

const useForm = (editDateTime) => {
    const [dateTime, setDateTime] = useState(editDateTime);
    const onSubmit = onFormSubmit(dateTime, setDateTime);
    return { onSubmit, dateTime, setDateTime };
}

export default useForm;