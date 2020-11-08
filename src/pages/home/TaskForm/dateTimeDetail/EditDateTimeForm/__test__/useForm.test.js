import React from 'react';
import { renderHook, any } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import useForm, { onFormSubmit } from '../useForm';
import fetchApiData from 'utils/api/fetchApiData/fetchApiData';
jest.mock('utils/api/fetchApiData/fetchApiData');

describe('src/pages/home/TaskForm/dateTimeDetail/EditDateTimeForm/__test__/useForm.test.js', () => {
    describe('useForm', () => {
        it('should return dateTime, setDateTime(), and onSubmit', () => {
            // Arrange
            const dateTime = {
                id: 'id',
                date: 'date',
                minutes: 123
            };

            const setDateTime = jest.fn();
            const realUseState = React.useState;
            jest.spyOn(React, 'useState')
                .mockImplementationOnce(dateTime => realUseState([dateTime, setDateTime]));

            // Act
            const { result } = renderHook(() => useForm(dateTime));

            // Assert
            expect(result.current.dateTime[0]).toEqual(dateTime);
            expect(result.current.setDateTime).toEqual(expect.any(Function));
            expect(result.current.onSubmit).toEqual(expect.any(Function));
        });
    });

    describe('onFormSubmit', () => {
        it('should return submitting function, when triggered fetchApiData invoked', () => {
            // Arrange
            const dateTime = {
                id: 'id',
                date: 'date',
                minutes: 123
            };
            const expectedUrl = "dateTime/id";
            const expectedBody = {
                "body": { "date": "date", "id": "id", "minutes": 123 },
                "method": "PUT"
            };
            const setDateTime = jest.fn();
            const event = { preventDefault: jest.fn() };

            // Act
            const target = onFormSubmit(dateTime, setDateTime);
            target(event);

            // Assert
            expect(event.preventDefault).toBeCalled();
            expect(fetchApiData).toBeCalledWith(expectedUrl, expectedBody, expect.any(Function));
        });
    })
});