import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import DropDown from "../../components/DropDown/DropDown";
import Timer from "../../components/Timer/Timer";
import TextArea from "../../components/TextArea/TextArea";
import FlashMessage from "../../components/FlashMessage/FlashMessage";
import ReactLoading from "react-loading";
import { getFormattedDate } from "../../utils/DateFormat";
import "./EditTaskForm.css";

const EditTaskForm = ({ match, list }) => {
  const taskId = match.params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [isFlashMessageShowing, setIsFlashMessageShowing] = useState(0);

  //@TODO: Handle if there is a bad response.
  useEffect(() => {
    if (taskId !== "-1") {
      fetch("/api/task/" + taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const dropDownSelection = list[selectedProject];

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
        setIsFlashMessageShowing(1);
      }
      setIsLoading(false);
    });
  };

  const descriptionChange = dataFromChild => {
    setDescription(dataFromChild || "");
  };

  const dropDownChange = dataFromChild => {
    setSelectedProject(dataFromChild);
  };

  const timeChangeHandler = dataFromChild => {
    setTime(dataFromChild);
  };

  const displayTaskOrLoading = () => {
    if (isLoading) {
      return (
        <div className="react-loading">
          <div className="react-loading__content">
            <ReactLoading type="bars" color="#000" />
          </div>
        </div>
      );
    }
  };

  const updateFlashMessage = isVisible => {
    if (isFlashMessageShowing) {
      setIsFlashMessageShowing(isVisible);
    }
  };

  return (
    <div className="m-a mt-50px w-500px">
      {displayTaskOrLoading()}
      {isFlashMessageShowing ? (
        <FlashMessage
          message="Success"
          opacity={isFlashMessageShowing}
          onClick={updateFlashMessage}
        />
      ) : (
        []
      )}

      <form onSubmit={handleSubmit}>
        <TextArea taskId={taskId} handler={descriptionChange} />
        <DropDown
          title="Contract Drop Down"
          taskId={taskId}
          list={list}
          handler={dropDownChange}
        />
        <Timer taskId={taskId} handler={timeChangeHandler} />
        <input
          className="form-submit f-r mt-4em"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

EditTaskForm.PropType = {
  match: PropType.object,
  list: PropType.array
};

export default EditTaskForm;
