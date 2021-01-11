import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextAreaAdapter from '../TextAreaAdapter';

// mock the third party components
jest.mock('@tinymce/tinymce-react', () => {
  return {
    Editor: () => <div className="editor">{'Editor'}</div>
  }
})

jest.mock('react-final-form', () => {
  return {
    Form: jest.fn().mockImplementation(() => { }),
    Field: () => <div className="field">{'Field'}</div>
  }
});

describe('TextAreaAdapter', () => {
  it('should render TextAreaAdapter', () => {
    // Arrange
    const input = {
      onChange: jest.fn(),
      value: 'value',
    }

    // Act
    const target = render(<TextAreaAdapter input={input} />);

    // Assert
    expect(target.container.querySelector(".field")).toBeTruthy();
  });

});
