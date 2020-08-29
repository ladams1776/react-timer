import React from 'react';
import { createWrapperWithContext } from 'testUtils';
import { useSetCurrentLocation } from 'hooks'
import useFetchTagById from '../useFetchTagById';
import useFormSetup from '../useFormSetup';
import AddTagPage from '../AddTagPage';

jest.mock('hooks/useSetCurrentLocation');
jest.mock('../useFetchTagById');
jest.mock('../useFormSetup');

describe('src/pages/tags/__test__/AddTagPage.test.js', () => {
    describe('AddTagPage', () => {
        it('should be present', () => {
            // Arrange
            const tag = {};
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
            const match = {
                params: {
                    id: 1
                }
            };

            // Act
            const wrapper = createWrapperWithContext(<AddTagPage match={match} />);

            // Assert
            expect(wrapper).toEqual(expect.anything());
        });
    });
});