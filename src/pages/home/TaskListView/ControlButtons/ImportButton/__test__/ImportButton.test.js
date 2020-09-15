import React from 'react';
import { shallow } from 'enzyme';
import { findByTestId } from 'testUtils';
import { useTaskEditContext } from 'hooks';
import useTaskAssembler from '../useTaskAssembler';
import * as writeJsonFile from "../writeJsonFile";
import DownloadButton from '../DownloadButton';

jest.mock('hooks/useTaskEditContext');
jest.mock('../useTaskAssembler');

describe('src/pages/home/TaskListView/__test__/DownloadButton.test.js', () => {
    describe('DownloadButton', () => {
        // Arrange
        let wrapper;

        const writeJsonFileSpy = jest.spyOn(writeJsonFile, "writeJsonFile");
        const assembleTaskMock = jest.fn().mockImplementation(() => 1);

        beforeEach(() => {
            writeJsonFileSpy.mockReset();
        });

        it('should render the button when tasks are available', () => {
            // Arrange
            // task context
            const taskContextMock = {
                updateTasks: jest.fn().mockImplementation(),
                tasks: [{ _id: '1', }, { _id: 'yup' }],
                projects: []
            };
            useTaskEditContext.mockReturnValue(taskContextMock);

            // Act
            wrapper = shallow(<DownloadButton />);

            // Assert
            expect(findByTestId(wrapper, 'btn-download')).toHaveLength(1);
        });

        it('should not render the button when tasks are not available', () => {
            // Arrange
            // task context
            const taskContextMock = {
                updateTasks: jest.fn().mockImplementation(),
                tasks: []
            };
            useTaskEditContext.mockReturnValue(taskContextMock);

            wrapper = shallow(<DownloadButton />);

            // Act

            // Assert
            expect(findByTestId(wrapper, 'btn-delete')).toHaveLength(0);
        });

        describe('#handleDownload', () => {
            // task context
            const taskContextMock = {
                updateTasks: jest.fn().mockImplementation(),
                tasks: [{ _id: '1', }, { _id: 'yup' }],
                projects: [],
            };

            beforeEach(() => {
                useTaskAssembler.mockReturnValue(assembleTaskMock)
                useTaskEditContext.mockReturnValue(taskContextMock);
            });

            it("should call writeJsonFile with value from 'assembleTask'", async () => {
                // Arrange
                wrapper = shallow(<DownloadButton />);

                // Act
                await findByTestId(wrapper, 'btn-download').props().onClick();

                // Assert
                expect(writeJsonFileSpy).toHaveBeenNthCalledWith(1, 1);
            });
        });
    });
});