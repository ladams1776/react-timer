import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateTimeItem from "../DateTimeItem";

describe('DateTimeItem.test.js', () => {
    it('should render', () => {
        // Arrange
        const setEditDateTimeSpy = jest.fn();
        const dateTime = {
            id: 'dateTimeID',
            date: 'dateTimeDate',
            time: 'dateTimeTime',
        };

        // Act
        const { queryByTestId } = render(<DateTimeItem dateTime={dateTime} setEditDateTime={setEditDateTimeSpy} />);

        // Assert
        expect(queryByTestId('DateTimeItem')).toBeInTheDocument();
    });

    it('should call setEditDateTimeSpy on click', () => {
        // Arrange
        const setEditDateTimeSpy = jest.fn();
        const dateTime = {
            id: 'dateTimeID',
            date: 'dateTimeDate',
            time: 'dateTimeTime',
        };
        const expected = {
            "date": dateTime.date,
            "id": dateTime.id,
            "minutes": dateTime.time,
        };

        // Act
        const { queryByTestId } = render(<DateTimeItem dateTime={dateTime} setEditDateTime={setEditDateTimeSpy} />);
        fireEvent.click(queryByTestId("DateTimeItem"));

        // Assert
        expect(queryByTestId('DateTimeItem')).toBeInTheDocument();
        expect(setEditDateTimeSpy).toBeCalledWith(expected);
    });
});