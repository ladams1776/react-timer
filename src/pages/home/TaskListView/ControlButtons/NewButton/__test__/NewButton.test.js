import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useOnClick from '../useOnClick';
import NewButton from "../NewButton";

jest.mock('../useOnClick');

describe("NewButton", () => {
    it("should display NewButton", () => {
        // Arrange
        const addNewTask = jest.fn();
        useOnClick.mockImplementationOnce(addNewTask);

        // Act
        const { getByTestId } = render(<NewButton />);

        // Assert
        expect(getByTestId("btn-new")).toBeTruthy();
    });
});