import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import target
import Button from '../Button';
import { useRippleEffect } from "../../hooks";

// mock hooks
jest.mock('hooks/useRippleEffect/useRippleEffect');

describe('Button.test.js', () => {
    it('should render', () => {
        // Arrange
        const clickCallbackSpy = jest.fn();
        useRippleEffect.mockImplementation(clickCallbackSpy);

        // Act
        const { queryByTestId } = render(<Button 
            className="className"
            disabled={false} 
            value="some value" 
            title="title"
            testid="testID"/>);

        // Assert
        expect(queryByTestId('testID')).toBeInTheDocument();
    });

    it('should call spy, when button clicked', () => {
        // Arrange
        const clickCallbackSpy = jest.fn();
        useRippleEffect.mockImplementation(clickCallbackSpy);

        // Act
        const { queryByTestId } = render(<Button
            className="className"
            disabled={false}
            value="some value"
            title="title"
            testid="testID" />);
        fireEvent.click(queryByTestId("testID"));

        // Assert
        expect(queryByTestId('testID')).toBeInTheDocument();
        expect(clickCallbackSpy).toBeCalled();
    });
});