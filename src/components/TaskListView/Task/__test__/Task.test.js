import React from "react";
import sinon from "sinon";
import chai, { expect } from "chai";
import * as useTaskEditContext from "~/useTaskEditContext";
import SinonChai from "sinon-chai";
import Task from "../Task";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe.only("src/components/Task/__test__/Task.test.js", () => {
  let stuber;

  stuber = sinon.stub(useTaskEditContext, "default");

  describe("Task", () => {
    it("should display Task with ", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: [],
        tasks: [{ id: "id" }, { id: "id" }]
      };

      stuber.returns(context);

      const wrapper = mount(
        <Task task={{ _id: "taskId", description: "this is a description" }} />
      );
      const preventDefaultSpy = sinon.spy();

      expect(
        wrapper.find("[data-test-id='task-item__description']").text()
      ).eql("this is a description");
    });
    //@TODO: Must figure out how to test the `fetch` pieces.
  });
});
