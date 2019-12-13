import React from "react";
import sinon from "sinon";
import * as useTaskEditContext from "../../useTaskEditContext";
import { findByTestId, createWrapperWithContext } from "../../../../testUtils";
import chai, { expect } from "chai";
import SinonChai from "sinon-chai";
import TextArea from "../TextArea";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe.only("src/Form/EditTask/TextArea/__test__/TextArea.test.js", () => {
  let wrapper;
  let stuber;
  stuber = sinon.stub(useTaskEditContext, "default");

  describe("TextArea", () => {
    it("should display a count of characters that is in the description", () => {
      const context = {
        description: "stub description",
        updateDescription: sinon.spy()
      };

      wrapper = createWrapperWithContext(<TextArea />, context, stuber);

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

        wrapper = createWrapperWithContext(<TextArea />, context, stuber);

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
