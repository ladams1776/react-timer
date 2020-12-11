import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../Modal';

// mock components
jest.mock('components/Button', () => {
    return jest.fn(() => <div data-testid="Button">{"Button"}</div>);
})

describe('Modal.test.js', () => {
    it('should render', () => {
        // Arrange
        const setIsShowingSpy = jest.fn();

        // Act
        const { getByTestId } = render(<Modal setIsShowingSpy={setIsShowingSpy}><div data-testid="children">{"children"}</div></Modal>);

        // Assert
        expect(getByTestId("Button")).toBeInTheDocument();
        expect(getByTestId("children")).toBeInTheDocument();
    });
});