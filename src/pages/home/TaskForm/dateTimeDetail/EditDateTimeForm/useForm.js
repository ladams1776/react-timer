import { useState } from 'react';
import { fetchApiData } from 'utils';

const useForm = (editDateTime) => {
    const [dateTime, setDateTime] = useState(editDateTime);
    const onClick = e => {
        e.preventDefault();
        const config = { body: { id: dateTime.id, date: dateTime.date, minutes: dateTime.minutes }, method: 'PUT' };
        fetchApiData(`dateTime/${dateTime.id}`, config, setDateTime);
    };

    return { onClick, dateTime, setDateTime };
}

export default useForm;