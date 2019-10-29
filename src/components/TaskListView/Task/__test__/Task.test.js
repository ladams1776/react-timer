import React from "react";
import sinon from "sinon";
import chai, { expect } from "chai";
import SinonChai from "sinon-chai";
import Task from "../Task";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe("src/components/Task/__test__/Task.test.js", () => {
  describe("Task", () => {
    it("should display Task with ", () => {
      const wrapper = mount(<Task task={{ _id: "" }} />);
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
