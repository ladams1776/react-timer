import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import target
import DateTimePage from '../DateTimePage';

// import target dependencies
import useFetchTaskById from '../useFetchTaskById';
import useDateTimeState from '../useDateTimeState';

// mock hooks
jest.mock('../useFetchTaskById');
jest.mock('../useDateTimeState');

// mock components
jest.mock('../../dateTimeListView/DateTimeListView', () => {
    return jest.fn(() => <div data-testid="DateTimeListView"></div>)
});
jest.mock('../../EditDateTimeForm/EditDateTimeForm', () => {
    return jest.fn(() => <div data-testid="EditDateTimeForm"></div>)
});

describe('DateTimePage.test.js', () => {
    it('should show EditDateTimeForm, when editDateTime with id is available', () => {
        // Arrange
        const taskId = 'taskId';
        const setIsShowingSpy = jest.fn();
        useDateTimeState.mockReturnValue({
            dateTimes: null,
            setDateTimes: 'setDateTimes',
            editDateTime: null,
            setEditDateTime: null
        });

        // Act
        const { queryByTestId } = render(<DateTimePage taskId={taskId} setIsShowing={setIsShowingSpy} />);

        // Assert
        expect(useFetchTaskById).toBeCalledWith(taskId, 'setDateTimes');
        expect(queryByTestId('DateTimeListView')).toBeInTheDocument();
        expect(queryByTestId('EditDateTimeForm')).toBeNull();
    });

    it('should show DateTimeListView, when no editDateTime with id', () => {
        // Arrange
        const taskId = 'taskId';
        const setIsShowingSpy = jest.fn();
        useDateTimeState.mockReturnValue({
            dateTimes: null,
            setDateTimes: 'setDateTimes',
            editDateTime: { id: 'editDateTimeID' },
            setEditDateTime: null
        });

        // Act
        const { queryByTestId } = render(<DateTimePage taskId={taskId} setIsShowing={setIsShowingSpy} />);

        // Assert
        expect(useFetchTaskById).toBeCalledWith(taskId, 'setDateTimes');
        expect(queryByTestId('EditDateTimeForm')).toBeInTheDocument();
        expect(queryByTestId('DateTimeListView')).toBeNull();
    });
});