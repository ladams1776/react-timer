import React from "react";
import sinon from "sinon";
import { getFormattedDate } from "utils";
import { createWrapperWithContext, findByTestId } from "testUtils";
import ControlButtons from "../ControlButtons";
import formatTimeContractAndCustomer from "../formatTimeContractAndCustomer";
import * as writeJsonFile from "../writeJsonFile";

describe("src/components/ControlButtons/__test__/ControlButtons.test.js", () => {
  let wrapper;

  const writeJsonFileSpy = jest.spyOn(writeJsonFile, "writeJsonFile");

  beforeEach(() => {
    writeJsonFileSpy.mockReset();
  });

  describe("ControlButtons", () => {
    it("should display ControlButtons with all 3 buttons when we have Tasks", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: [],
        tasks: [{ id: "id" }, { id: "id" }]
      };

      wrapper = createWrapperWithContext(<ControlButtons />, context);

      expect(wrapper.find(findByTestId("btn-download"))).toHaveLength(1);
      expect(wrapper.find(findByTestId("btn-delete"))).toHaveLength(1);
      expect(wrapper.find(findByTestId("btn-new"))).toHaveLength(1);
    });

    it("should display ControlButtons with only new button when we don't have a task", () => {
      const context = {
        setMessage: sinon.spy(),
        projects: [],
        tasks: []
      };

      wrapper = createWrapperWithContext(<ControlButtons />, context);

      expect(wrapper.find("[data-test-id='btn-download']")).toHaveLength(0);
      expect(wrapper.find("[data-test-id='btn-delete']")).toHaveLength(0);
      expect(wrapper.find("[data-test-id='btn-new']")).toHaveLength(1);
    });

    describe("#_handleDelete", () => {
      it('should should display FlashMessage and empty the "tasks" array', async () => {
        global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
            json: jest.fn().mockImplementation(() => Promise.resolve())
          })
        );

        jest.useFakeTimers(); // Need to declare we are using setTimeout

        const context = {
          setMessage: jest.fn().mockImplementation(),
          projects: [],
          tasks: [{ id: "id" }, { id: "id" }],
          updateTasks: jest.fn().mockImplementation()
        };

        wrapper = createWrapperWithContext(<ControlButtons />, context);

        const response = await wrapper
          .find("[data-test-id='btn-delete']")
          .props()
          .onClick({ preventDefault: jest.fn().mockImplementation() });

        jest.runTimersToTime(500); // speed up the time on the setTimeout

        expect(context.updateTasks).toHaveBeenCalledTimes(1);
        expect(context.updateTasks).toHaveBeenCalledWith([]);
        expect(context.setMessage).toHaveBeenCalledWith(
          "Successfully deleted all tasks"
        );
        expect(context.setMessage).toHaveBeenCalledTimes(1);
      });
    });

    describe("#_handleDownload", () => {
      const task = {
        time: 10000,
        contractId: "project Id",
        description: "task description becomes file name"
      };

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

      it('should prepare "tasks" into a format', () => {
        const context = {
          projects,
          tasks: [task]
        };

        wrapper = createWrapperWithContext(<ControlButtons />, context);

        const response = wrapper
          .find("[data-test-id='btn-download']")
          .props()
          .onClick();

        const expectTaskBundle = {
          date: getFormattedDate(new Date()),
          WorkUnit: [formatTimeContractAndCustomer(context.tasks[0], projects)]
        };

        expect(writeJsonFileSpy).toHaveBeenCalledWith(expectTaskBundle);
      });
    });
    //@TODO: Test New Task
  });
});
