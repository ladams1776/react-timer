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
        const { getByTestId } = render(<SubmitButton />);

        // Assert
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });

    describe('onClick', () => {
        it('should fire onSubmit when button is clicked', () => {
            // Arrange
            const onSubmit = jest.fn();
            useSubmit.mockImplementationOnce(onSubmit);

            // Act
            const { getByTestId } = render(<SubmitButton />);
            fireEvent.click(getByTestId("submit"));

            // Assert
            expect(getByTestId('submit')).toHaveTextContent('Submit');
            expect(onSubmit).toBeCalled();
        });
    })
});