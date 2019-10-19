import React from "react";
import sinon from "sinon";
import chai, { expect } from "chai";
import SinonChai from "sinon-chai";
import DeleteTaskButton from "../DeleteTaskButton";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe.only("src/components/DeleteTaskButton/__test__/DeleteTaskButton.test.js", () => {
  describe("DeleteTaskButton", () => {
   
    it("should display DeleteTaskBu", () => {
      const wrapper = mount(<DeleteTaskButton />);
      const preventDefaultSpy = sinon.spy();

      wrapper
        .find("[data-test-id='delete-task-button']")
        .props()
        .onClick({ preventDefault: preventDefaultSpy });

      expect(preventDefaultSpy).to.have.been.calledOnce;     
    });
    //@TODO: Must figure out how to test the `fetch` pieces.
  });
});
