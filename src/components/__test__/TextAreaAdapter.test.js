import React from 'react';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import TextAreaAdapter from '../TextAreaAdapter';

describe('src/components/__test__/TextAreaAdapter.test.js', () => {
    describe('TextAreaAdapter', () => {
        let wrapper;

        it('should render TextAreaAdapter', () => {
            wrapper = createWrapperWithContext(<TextAreaAdapter input={{value: 'hi'}}/>);

            expect(findByTestId(wrapper, "text-area-adapter")).toBeTruthy();
        });
    });
});
