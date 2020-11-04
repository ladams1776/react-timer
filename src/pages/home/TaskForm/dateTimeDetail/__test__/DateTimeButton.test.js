import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateTimeButton from '../DateTimeButton';
import DateTimeModal from '../DateTimeModal';

describe('src/pages/home/TaskForm/dateTimeDetail/__test__/DateTimeButton.test.js', () => {
    it('render', () => {
        // Arrange

        // Act
        render(<DateTimeButton dateTime={[{ date: '2020-10-29T03:25:30.167+00:00', time: '100' }]} />);

        // Assert
        expect(screen.getByRole("button")).toBeTruthy();
        expect(screen.getByRole("DateTimeModal")).toBeFalsy();
    });

    describe("Press button", () => {
        it('onClick', () => {
            //@TODO: How do we mock useState and setIsShowingSpy with react testing library?
        });
    });
});