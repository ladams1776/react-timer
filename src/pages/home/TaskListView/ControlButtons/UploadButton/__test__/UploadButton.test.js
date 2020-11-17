import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UploadButton from '../UploadButton';

describe('src/pages/home/TaskListView/ControlButtons/UploadButton/__test__/UploadButton.test.js', () => {
    describe('UploadButton', () => {
        it('should display the button', () => {
            // Arrange
            const realUseState = React.useState;
            jest.spyOn(React, 'useState')
                .mockImplementationOnce(() => realUseState(false));

            // Act
            const target = render(<UploadButton />);

            // Assert
            expect(target.getByRole("button")).toBeTruthy();
        });
    });
});