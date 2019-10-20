import React, { useEffect, useState } from "react";
import useTaskEditContext from "../../Form/EditTask/useTaskEditContext";
import PropType from "prop-types";
import FlashMessage from "../../components/FlashMessage/FlashMessage";
import DropDown from "../../components/DropDown/DropDown";
import Timer from "../../components/Timer/Timer";
import TextArea from "../../components/TextArea/TextArea";
import ReactLoading from "react-loading";
import { getFormattedDate } from "../../utils/DateFormat";
import "./EditTaskForm.css";

const EditTaskForm = ({ match }) => {
  const {
    time,
    updateTime,
    updateFlashMessage,
    description,
    updateDescription,
    selectedProject,
    updateDropDown,
    dropDownListContracts
  } = useTaskEditContext();

  const [isLoading, setIsLoading] = useState(true);

  const taskId = match.params.id;

  //@TODO: Handle if there is a bad response.
  useEffect(() => {
    if (taskId !== "-1") {
      fetch("/api/task/" + taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          updateDescription(task.description);
          updateTime(task.time);
          updateDropDown(task.contractId);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
    }
  }, [taskId]);

  const handleSubmit = event => {
    event.preventDefault();

    const dropDownSelection = dropDownListContracts[selectedProject];

    const date = new Date();
    const dateFormatted = getFormattedDate(date);

    const timeTask = {
      date: dateFormatted,
      WorkUnit: [
        {
          time: time,
          contractId: dropDownSelection.key,
          description: description
        }
      ]
    };

    timeTask._id = taskId !== -1 ? taskId : null;

    fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(timeTask),
      headers: { "Content-Type": "application/json" }
    }).then(e => {
      if (e.status === 200) {
        updateFlashMessage(true);
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="m-a mt-50px w-500px">
      <FlashMessage message="Created new Task!" />

      {!isLoading || (
        <div className="react-loading">
          <div className="react-loading__content">
            <ReactLoading type="bars" color="#000" />
          </div>
        </div>
      )}

      {!isLoading && (
        <form onSubmit={handleSubmit}>
          <TextArea />
          <DropDown />
          <Timer taskId={taskId} />
          <input
            className="form-submit f-r mt-4em"
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
};

EditTaskForm.PropType = {
  match: PropType.object.isRequired,
  time: PropType.number.isRequired,
  updateTime: PropType.func.isRequired,
  updateFlashMessage: PropType.func.isRequired,
  description: PropType.string.isRequired,
  updateDescription: PropType.func.isRequired,
  selectedProject: PropType.number.isRequired,
  updateDropDown: PropType.func.isRequired,
  dropDownListContracts: PropType.array.isRequired
};

export default EditTaskForm;
