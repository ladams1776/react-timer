import React from 'react';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import { useBrowserHistory } from 'hooks';
import Tag from '../Tag';
import DeleteTagButton from '../DeleteTagButton/DeleteTagButton';

jest.mock('hooks/useBrowserHistory');

describe('src/pages/tasks/TaskListView/Tag/__test__/Tag.test.js', () => {
  // Arrange
  let wrapper;

  describe('Tag', () => {
    it('should display Tag when one is present', () => {
      // Arrange
      const context = {
        projects: [{ label: 'label of project' }],
      };
      const history = { push: jest.fn() };
      useBrowserHistory.mockReturnValue(history);
      const expected = {
        children:
          [<div className="tagItemLeft" onClick={expect.anything()}>
            <div>yeah</div>
            <div className="tagItemDescription" dangerouslySetInnerHTML={{ "__html": "what" }} />
          </div>,
          <DeleteTagButton tagId={1} />],
        className: "tagItem",
        "data-test-id": "tag"
      };

      // Act
      wrapper = createWrapperWithContext(
        <Tag _id={1} name={'yeah'} description={'what'} />,
        context,
      );

      // Assert
      expect(findByTestId(wrapper, 'tag').props()).toEqual(expected);
    });
  });
});
