import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// target
import EditDateTimeForm from '../EditDateTimeForm';

// dependencies
// useSubmit
jest.mock('../useSubmit', () => {
    return () => jest.fn() //@TODO: Left off here.
});

describe('src/pages/tasks/TaskForm/dateTimeDetail/EditDateTimeForm/__test__/EditDateTimeForm.test.js', () => {
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