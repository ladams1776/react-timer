import React from "react";
import { shallow } from 'enzyme';
import { fetchApiData } from 'utils';
import useDispatch from '../useDispatch';
import { findByTestId } from "testUtils";
import DeleteTagButton from "../DeleteTagButton";

jest.mock('utils/api/fetchApiData');
jest.mock('../useDispatch');

describe("src/pages/tags/TaskListView/Tag/DeleteTagButton/__test__/DeleteTagButton.test.js", () => {
  describe('DeleteTagButton', () => {
    // Arrange
    let wrapper;

    it('should render the button', () => {
      // Arrange
      const expected = {
        className: "deleteBtn glyphicon glyphicon-remove",
        "data-test-id": "delete-tag-button",
        onClick: expect.anything()
      }

      // Act
      wrapper = shallow(<DeleteTagButton tagId={1} />);

      // Assert
      expect(findByTestId(wrapper, 'delete-tag-button').props()).toEqual(expected);
    });

    describe('_deleteClick', () => {
      it('should call fetchApiData', async () => {
        // Arrange
        const id = 1;
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        wrapper = shallow(<DeleteTagButton tagId={id} />);

        // Act
        await findByTestId(wrapper, 'delete-tag-button').props().onClick({ preventDefault: jest.fn });

        // Assert
        expect(fetchApiData).toHaveBeenNthCalledWith(1, `tag/${id}`, { method: 'DELETE' }, dispatch);
      });
    });
  });
});
