import React from 'react';
import { shallow } from 'enzyme';
import { fetchApiData } from 'utils';
import { findByTestId } from 'testUtils';
import { useTaskEditContext, useLoadinSpinnerContext } from 'hooks';
import useDispatch from '../useDispatch';
import DeleteButton from '../DeleteButton';

jest.mock('utils/api/fetchApiData');
jest.mock('hooks/useTaskEditContext');
jest.mock('hooks/useLoadinSpinnerContext');
jest.mock('../useDispatch');

describe('src/pages/home/TaskListView/__test__/DeleteButton.test.js', () => {
    describe('DeleteButton', () => {
        // Arrange
        let wrapper;

        // loadin Spinner context
        const loadinSpinnerContextMock = {
            setIsLoadin: jest.fn().mockImplementation(),
        };

        beforeEach(() => {
            useLoadinSpinnerContext.mockReturnValue(loadinSpinnerContextMock);
        });

        it('should render the button when tasks are available', () => {
            // Arrange
            // task context
            const taskContextMock = {
                updateTasks: jest.fn().mockImplementation(),
                tasks: [{ _id: '1', }, { _id: 'yup' }]
            };
            useTaskEditContext.mockReturnValue(taskContextMock);

            // wrapper = createWrapperWithContext(<DeleteButton />, taskContextMock);
            wrapper = shallow(<DeleteButton />);
            // Act

            // Assert
            expect(findByTestId(wrapper, 'btn-delete')).toHaveLength(1);
        });

        it('should not render the button when tasks are not available', () => {
            // Arrange
            // task context
            const taskContextMock = {
                updateTasks: jest.fn().mockImplementation(),
                tasks: []
            };
            useTaskEditContext.mockReturnValue(taskContextMock);

            wrapper = shallow(<DeleteButton />);

            // Act

            // Assert
            expect(findByTestId(wrapper, 'btn-delete')).toHaveLength(0);
        });

        describe('#handleDelete', () => {
            // task context
            const taskContextMock = {
                updateTasks: jest.fn().mockImplementation(),
                tasks: [{ _id: '1', }, { _id: 'yup' }]
            };

            beforeEach(() => {
                fetchApiData.mockReset();
                useTaskEditContext.mockReturnValue(taskContextMock);
            });

            it('should setSuccess, updateTasks and setIsLoadin when clicked', async () => {
                // Arrange
                const dispatch = jest.fn().mockImplementation();
                useDispatch.mockReturnValue(dispatch);
                const event = { preventDefault: jest.fn().mockImplementation() };
                wrapper = shallow(<DeleteButton />);
                const spy = jest.fn().mockImplementation();

                // Act
                await findByTestId(wrapper, 'btn-delete').props().onClick(event);

                // Assert
                expect(fetchApiData).toHaveBeenCalledTimes(1, "tasks", { "method": "DELETE" }, dispatch);
                // expect(dispatch).toHaveBeenCalledTimes(1, flashMessageContextMock.setSuccessFlashMessage, taskContextMock.updateTasks, loadinSpinnerContextMock.setIsLoadin);
                expect(loadinSpinnerContextMock.setIsLoadin).toHaveBeenNthCalledWith(1, true);
            });
        });
    });
});