import React from "react";
import DropDown from "../../components/DropDown/DropDown";
import Timer from "../../components/Timer/Timer";
import TextArea from "../../components/TextArea/TextArea";
import "./EditTaskForm.css";
import FlashMessage from "../../components/FlashMessage/FlashMessage";
import ReactLoading from "react-loading";
import { getFormattedDate } from "../../utils/DateFormat";

export default class EditTaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskId: this.props.match.params.id,
      description: "", // text area
      time: 0, // from timer
      selectedProject: 0,
      dropDownList: this.props.list,
      isFlashMessageShowing: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    const taskId = this.state.taskId;

    if (taskId !== "-1") {
      fetch("/api/task/" + taskId)
        .then(response => {
          return response.json();
        })
        .then(task => {
          this.setState({
            isLoading: false
          });
        });
    } else {
      this.setState({ isLoading: false });
    }
  }

  textChangeHandler = dataFromChild => {
    this.setState({
      description: dataFromChild
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const dropDownSelection = this.state.dropDownList[
      this.state.selectedProject
    ];
    const time = this.state.time;
    const description = this.state.description;
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

    if (this.state.taskId !== -1) {
      timeTask._id = this.state.taskId;
    }

    // this.setState({isLoading: true});

    // this.state.writer.write(timeTask);
    fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(timeTask),
      headers: { "Content-Type": "application/json" }
    }).then(e => {
      if (e.status === 200) {
        let isFlashMessageShowing = this.state.isFlashMessageShowing;
        isFlashMessageShowing = 1;
        this.setState({ isFlashMessageShowing: isFlashMessageShowing });
      }
      this.setState({ isLoading: false });
    });
  };

  descriptionChange = dataFromChild => {
    this.setState({ description: dataFromChild ? dataFromChild : null });
  };

  dropDownChange = dataFromChild => {
    this.setState({ selectedProject: dataFromChild });
  };

  timeChangeHandler = dataFromChild => {
    this.setState({ time: dataFromChild });
  };

  render() {
    return <div className="m-a w-400px">{this.displayTaskOrLoading()}</div>;
  }

  displayTaskOrLoading() {
    if (this.state.isLoading) {
      return (
        <div className="react-loading">
          <div className="react-loading__content">
            <ReactLoading type="bars" color="#000" />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <FlashMessage
            message="Success"
            opacity={this.state.isFlashMessageShowing}
            handler={this.updateFlashMessage}
          />
          <form onSubmit={this.handleSubmit}>
            <TextArea
              title="Description:"
              taskId={this.state.taskId}
              handler={this.descriptionChange}
            />
            <DropDown
              title="Contract Drop Down"
              taskId={this.state.taskId}
              list={this.state.dropDownList}
              handler={this.dropDownChange}
            />
            <Timer
              taskId={this.state.taskId}
              handler={this.timeChangeHandler}
            />
            <input
              className="form-submit f-r mt-4em"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      );
    }
  }

  updateFlashMessage = isVisible => {
    if (this.state.isFlashMessageShowing) {
      this.setState({ isFlashMessageShowing: isVisible });
    }
  };
}
