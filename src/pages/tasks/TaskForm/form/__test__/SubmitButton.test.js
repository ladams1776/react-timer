import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SubmitButton from '../SubmitButton';
import useSubmit from '../../hooks/useSubmit/useSubmit';

jest.mock('../../hooks/useSubmit/useSubmit');

describe('SubmitButton', () => {
    it('should render', () => {
        // Arrange
        const onSubmit = jest.fn();
        useSubmit.mockImplementationOnce(() => onSubmit);

        // Act
        const { queryByTestId } = render(<SubmitButton />);

        // Assert
        expect(queryByTestId('submit')).toHaveTextContent('Submit');
    });

    describe('onClick', () => {
        it('should fire onSubmit when button is clicked', () => {
            // Arrange
            const onSubmit = jest.fn();
            useSubmit.mockImplementationOnce(onSubmit);

            // Act
            const { queryByTestId } = render(<SubmitButton />);
            fireEvent.click(queryByTestId("submit"));

            // Assert
            expect(queryByTestId('submit')).toHaveTextContent('Submit');
            expect(onSubmit).toBeCalled();
        });
    })
});