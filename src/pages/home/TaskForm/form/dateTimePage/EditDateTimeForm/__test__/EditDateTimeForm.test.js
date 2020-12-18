import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditDateTimeForm from '../EditDateTimeForm';

jest.mock('../useForm', () => {
    return jest.fn(() => {
        return {
            onClick: jest.fn(),
            setDateTime: jest.fn(),
            dateTime: { id: 'id', date: 'date', minutes: '123' }
        }
    });
});

describe('src/pages/home/TaskForm/dateTimeDetail/EditDateTimeForm/__test__/EditDateTimeForm.test.js', () => {
    describe('EditDateTimeForm', () => {
        it('should render', () => {
            // Arrange
            const expected = "Date: Minutes:";

            // Act
            render(<EditDateTimeForm id={'id'} date={'date'} minutes={123} />);

            // Assert
            expect(screen.queryByTestId('editDateTimeForm')).toHaveTextContent(expected);
        })
    });
});