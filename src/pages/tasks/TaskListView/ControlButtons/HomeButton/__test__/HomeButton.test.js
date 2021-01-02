import React from "react";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomeButton from '../HomeButton';
import useHomeOnClick from "../useHomeOnClick";

jest.mock('../useHomeOnClick');

describe('src/pages/tasks/TaskListView/ControlButtons/HomeButton/__test__/HomeButton.test.js', () => {
    describe('HomeButton', () => { 
        it('should render', () => {
            // Arrange
            const onClick = jest.fn();
            useHomeOnClick.mockImplementation(onClick);

            // Act
            const target = render(<HomeButton />);

            // Assert
            expect(target.getByRole("button")).toBeTruthy();
        });

        describe('onClick', () => {
            it('should invoke onClick when clicked', () => {
                // Arrange
                const onClick = jest.fn();
                useHomeOnClick.mockImplementation(onClick);

                // Act
                const target = render(<HomeButton />);
                fireEvent.click(target.getByRole("button"));

                // Assert
                expect(target.getByRole("button")).toBeTruthy();
                expect(onClick).toBeCalled();
            });
        });
    });
});
