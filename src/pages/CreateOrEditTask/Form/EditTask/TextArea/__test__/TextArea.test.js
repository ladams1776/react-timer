import React from "react";
import sinon from "sinon";
import { findByTestId, createWrapperWithContext } from "testUtils";
import { expect } from "chai";
import TextArea from "../TextArea";

describe("src/Form/EditTask/TextArea/__test__/TextArea.test.js", () => {
  let wrapper;

  describe("TextArea", () => {
    it("should display a count of characters that is in the description", () => {
      const context = {
        description: "stub description",
        updateDescription: sinon.spy()
      };

      wrapper = createWrapperWithContext(<TextArea />, context);

      const descriptionCountSpan = wrapper.find(
        findByTestId("description-count")
      );

      expect(descriptionCountSpan.text()).to.equal("16 character(s)");
    });

    describe("onChange", () => {
      it("should call updateDescription with the text area's value, when onChange is called", () => {
        const context = {
          description: "stub description",
          updateDescription: sinon.spy()
        };

        wrapper = createWrapperWithContext(<TextArea />, context);

        wrapper
          .find(findByTestId("description-textarea"))
          .props()
          .onChange({ target: { value: "stub description + 1" } });
        expect(context.updateDescription).calledOnceWith(
          "stub description + 1"
        );
      });
    });
  });
});
