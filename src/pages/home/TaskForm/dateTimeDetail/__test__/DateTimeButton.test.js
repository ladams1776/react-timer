import React from 'react';
import { render, screen, fireEvent, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateTimeButton from '../DateTimeButton';
import DateTimeModal from '../DateTimeModal';

describe('src/pages/home/TaskForm/dateTimeDetail/__test__/DateTimeButton.test.js', () => {
    it('render button, but no DateTimeModal', () => {
        // Arrange

        // Act
        const target = render(<DateTimeButton dateTime={[{ date: '2020-10-29T03:25:30.167+00:00', time: '100' }]} />);

        // Assert
        expect(screen.getByRole("button")).toBeTruthy();
        expect(target.container.querySelector('.modalContent')).toBeFalsy();
    });

    describe("onClick", () => {
        // Arrange
        const realUseState = React.useState;
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState([]));

        it('should show DateTimeModal', async () => {
            // Arrange
            const expected = 'Date: 2020-10-28 11:25:30 pmMinutes: 100Close';

            // Act
            const target = render(<DateTimeButton dateTime={[{ date: '2020-10-29T03:25:30.167+00:00', time: '100' }]} />);
            fireEvent.click(screen.getByRole('button'));

            // Assert
            expect(target.container.querySelector('.modalContent')).toHaveTextContent(expected)
        });
    });
});