import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateTimePage from '../page/DateTimePage';

// mock for the target
jest.mock('../useFetchTaskById');

describe('src/pages/home/TaskForm/dateTimeDetail/__test__/DateTimePage.test.js', () => {
    describe('DateTimePage', () => {
        //@TODO: Mocking here is not working. 
        // it('should render', () => {
        //     // Arrange 
        //     const taskId = 'taskId';
        //     const setIsShowingSpy = jest.fn();
        //     const dateTimes = [{
        //         id: 'id',
        //         date: 'date',
        //         minutes: 123
        //     }];
        //     const expected = 'Date: 2020-10-28 11:25:30 pmMinutes: 100Close';

        //     const realUseState = React.useState;
        //     jest.spyOn(React, 'useState')
        //         .mockImplementation(() => realUseState(dateTimes, jest.fn()));

        //     // Act
        //     const target = render(<DateTimePage taskId={taskId} setIsShowing={setIsShowingSpy} />);

        //     // Assert
        //     expect(screen.getByRole('button')).toHaveTextContent('Close');
        //     expect(target.container.querySelector('.modalContent')).toHaveTextContent(expected)
        // });

        describe('Close button', () => {
            it('onClick', () => {
                // Arrange
                const setIsShowingSpy = jest.fn();

                // Act
                render(<DateTimePage taskId="taskID" setIsShowing={setIsShowingSpy} />);

                fireEvent.click(screen.getByText('Close'));

                // Assert
                expect(setIsShowingSpy).toBeCalledWith(false);
            });
        });
    })
});