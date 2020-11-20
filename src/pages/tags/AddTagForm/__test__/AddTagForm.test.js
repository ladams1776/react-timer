import React from "react";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useFormSetup from '../useFormSetup';
import useSetCurrentLocation from 'hooks/useSetCurrentLocation';
import AddTagForm from '../AddTagForm';

// import React from 'react';
// import { createWrapperWithContext } from 'testUtils';

jest.mock('hooks/useSetCurrentLocation');
jest.mock('../useFetchTagById');
jest.mock('../useFormSetup');

describe('src/pages/tags/__test__/AddTagForm.test.js', () => {
    describe('AddTagForm', () => {
        it('should be present', () => {
            // Arrange
            const tag = {};
            const tagId = 101;
            const setTag = jest.fn();
            const onSubmit = jest.fn();
            const setName = jest.fn();
            const setDescription = jest.fn();
            const nameRef = '';
            const descritionRef = '';
            const idRef = '';

            useFormSetup.mockReturnValue({
                tag,
                setTag,
                onSubmit,
                setName,
                setDescription,
                nameRef,
                descritionRef,
                idRef,
            });

            // Act
            const target = render(<AddTagForm tagId={tagId} />);

            // Assert
            expect(useSetCurrentLocation).calledWith(`/tag/${tagId}`);
            expect(wrapper).toEqual(expect.anything());
        });
    });
});