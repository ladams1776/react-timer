import React from "react";
import { shallow } from 'enzyme';
import { useFlashMessageFetchApiData, reloadAndRefresh } from 'utils';
import { findByTestId } from "testUtils";
import DeleteTagButton from "../DeleteTagButton";

jest.mock('utils/api/useFlashMessageFetchApiData');
jest.mock('utils/api/reloadAndRefresh');

describe("src/pages/tags/TaskListView/Tag/DeleteTagButton/__test__/DeleteTagButton.test.js", () => {
  describe('DeleteTagButton', () => {
    // Arrange
    let wrapper;

    it('should render the button, and helper functions should be called to be ready for the onClick', () => {
      // Arrange
      const id = 1;
      const setTags = jest.fn();
      const reload = jest.fn();
      reloadAndRefresh.mockReturnValue(reload);
      const dispatch = jest.fn();
      useFlashMessageFetchApiData.mockReturnValue(dispatch);

      const expected = {
        className: "deleteBtn glyphicon glyphicon-remove",
        "data-test-id": "delete-tag-button",
        onClick: expect.anything()
      }

      // Act
      wrapper = shallow(<DeleteTagButton tagId={id} setTags={setTags} />);

      // Assert
      expect(reloadAndRefresh).toHaveBeenNthCalledWith(1, 'tags', {}, setTags);
      expect(useFlashMessageFetchApiData).toHaveBeenNthCalledWith(1, `tag/${id}`, { method: 'DELETE' }, reload, 'Successfully deleted tag', 'Error deleting tag');
      expect(findByTestId(wrapper, 'delete-tag-button').props()).toEqual(expected);
    });

    describe('_deleteClick', () => {
      it('should call dispatch, which was prepped during button instantiation', async () => {
        // Arrange
        const event = {
          preventDefault: jest.fn(),
        };
        const id = 1;
        const setTags = jest.fn();
        const reload = jest.fn();
        reloadAndRefresh.mockReturnValue(reload);
        const dispatch = jest.fn();
        useFlashMessageFetchApiData.mockReturnValue(dispatch);

        wrapper = shallow(<DeleteTagButton tagId={id} setTags={setTags} />);

        // Act
        await findByTestId(wrapper, 'delete-tag-button').props().onClick(event);

        // Assert
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    });
  });
});
