import React from "react";
import sinon from "sinon";
import * as useTaskEditContext from "../../../Form/EditTask/useTaskEditContext";
import chai from "chai";
import SinonChai from "sinon-chai";
import ControlButtons from "../ControlButtons";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe.only("src/components/ControlButtons/__test__/ControlButtons.test.js", () => {
  let stuber;

  stuber = sinon.stub(useTaskEditContext, "default");

  describe("ControlButtons", () => {
    beforeEach(() => {
      stuber.restore();
    });
    it("should display ControlButtons with all 3 buttons when we `haveTask`", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: []
      };
      stuber.returns(context);
      const setTasksSpy = sinon.spy();

      const wrapper = shallow(
        <ControlButtons haveTasks setTasks={setTasksSpy} />
      );

      expect(wrapper.find("[data-test-id='btn-download']")).toHaveLength(1);
      expect(wrapper.find("[data-test-id='btn-delete']")).toHaveLength(1);
      expect(wrapper.find("[data-test-id='btn-new']")).toHaveLength(1);
    });

    it("should display ControlButtons with all only new button when we don't `haveTask`", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: []
      };
      stuber.returns(context);
      const setTasksSpy = sinon.spy();

      const wrapper = shallow(
        <ControlButtons haveTasks={false} setTasks={setTasksSpy} />
      );

      expect(wrapper.find("[data-test-id='btn-download']")).toHaveLength(0);
      expect(wrapper.find("[data-test-id='btn-delete']")).toHaveLength(0);
      expect(wrapper.find("[data-test-id='btn-new']")).toHaveLength(1);
    });
    //@TODO: Figure out how to test the Delete, Download, and Save buttons
  });
});
