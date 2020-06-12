import React from 'react';
import { shallow } from 'enzyme';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import TextAreaAdapter from '../TextAreaAdapter';

describe('src/components/__test__/TextAreaAdapter.test.js', () => {
  describe('TextAreaAdapter', () => {
    let wrapper;

    it('should render TextAreaAdapter', () => {
      // Arrange
      const description = 'yeah';
      const setDescriptionSpy = jest.fn();

      const expected = {
        cloudChannel: '5',
        'data-test-id': 'text-area-adapter',
        id: 'description',
        init: {
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor |         alignleft aligncenter alignright alignjustify |         bullist numlist outdent indent | removeformat | help',
        },
        initialValue: description,
        name: 'description',
        onEditorChange: expect.anything(),
      };

      // Act
      wrapper = shallow(
        <TextAreaAdapter
          description={description}
          setDescription={setDescriptionSpy}
        />,
      );

      // Assert
      expect(findByTestId(wrapper, 'text-area-adapter').props()).toEqual(
        expected,
      );
    });
  });
});
