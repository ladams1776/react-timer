import React from "react";
import { shallow } from 'enzyme';
import { findByTestId } from "testUtils";
import useBrowserHistory from 'hooks/useBrowserHistory';
import NewButton from "../NewButton";

jest.mock('hooks/useBrowserHistory');

describe("src/components/ControlPanel/NewButton/__test__/NewButton.test.js", () => {
    // Arrange 
    let wrapper;
    const historyMock = {
        push: jest.fn()
    };

    beforeEach(() => {
        historyMock.push.mockReset();
        useBrowserHistory.mockReturnValue(historyMock);
    });

    describe("NewButton", () => {
        it("should display NewButton", () => {
            // Arrange

            // Act
            wrapper = shallow(<NewButton />);

            // Assert
            expect(findByTestId(wrapper, "btn-new")).toHaveLength(1);
        });
    });

    //@TODO: Test NewButton onClick - model it after DeleteTagButton.
});
