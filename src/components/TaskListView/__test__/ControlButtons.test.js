import React from "react";
import sinon from "sinon";
import * as useTaskEditContext from "../../../Form/EditTask/useTaskEditContext";
import chai from "chai";
import SinonChai from "sinon-chai";
import ControlButtons, { updateTaskToWriteToFile } from "../ControlButtons";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe("src/components/ControlButtons/__test__/ControlButtons.test.js", () => {
  let stuber;

  stuber = sinon.stub(useTaskEditContext, "default");

  describe.only("ControlButtons", () => {
  
    it("should display ControlButtons with all 3 buttons when we `haveTask`", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: [],
        tasks: [{ id: "id" }, { id: "id" }]
      };

      stuber.returns(context);

      const wrapper = shallow(<ControlButtons />);

      expect(wrapper.find("[data-test-id='btn-download']")).toHaveLength(1);
      expect(wrapper.find("[data-test-id='btn-delete']")).toHaveLength(1);
      expect(wrapper.find("[data-test-id='btn-new']")).toHaveLength(1);
    });

    it("should display ControlButtons with all only new button when we don't `haveTask`", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: [],
        tasks: []
      };
      stuber.returns(context);

      const wrapper = shallow(<ControlButtons />);

      expect(wrapper.find("[data-test-id='btn-download']")).toHaveLength(0);
      expect(wrapper.find("[data-test-id='btn-delete']")).toHaveLength(0);
      expect(wrapper.find("[data-test-id='btn-new']")).toHaveLength(1);
    });

    describe("updateTaskToWriteToFile", () => {
      const projects = [
        {
          key: "project Id",
          contract: "contract for the project",
          customer: "customer for the contract"
        },
        {
          key: "project Id2",
          contract: "contract for the project2",
          customer: "customer for the contract2"
        },
        {
          key: "project Id3",
          contract: "contract for the project3",
          customer: "customer for the contract3"
        }
      ];

      it("should make a task bundle with the project description", () => {
        const task = {
          time: 10000,
          contractId: "project Id3",
          description: "task description becomes file name"
        };

        const expectedTaskWithProject = {
          ...task,
          time: (task.time / 1000 / 60 / 60).toFixed(2),
          contract: projects[2].contract,
          customer: projects[2].customer
        };

        const actualTaskWithProject = updateTaskToWriteToFile(task, projects);
        expect(actualTaskWithProject).toEqual(expectedTaskWithProject);
      });
    });
    //@TODO: Figure out how to test the Delete, Download, and Save buttons
  });
});
