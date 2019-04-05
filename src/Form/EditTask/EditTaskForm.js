import React from 'react';
import ReactRouterDom  from "react-router-dom";
import DropDown from '../../components/DropDown/DropDown';
import Timer from '../../components/Timer/Timer';
import TextArea from '../../components/TextArea/TextArea';
import './EditTaskForm.css';

export default class EditTaskForm extends React.Component {

    constructor(props) {
        console.log('EditTaskForm is called');
        super(props);

        this.state = {
            taskId: this.props.match.params.id,
            description: '', // text area
            time: 0,     // from timer
            selectedProject: 0,
            dropDownList: this.props.list,
        };
    }


  

    textChangeHandler = (dataFromChild) => {
        this.setState({
            description: dataFromChild
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const dropDownSelection = this.state.dropDownList[this.state.selectedProject];
        const time = this.state.time;
        const description = this.state.description;
        const date = new Date();
        const dateFormatted = date.getMonth().toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString()
        const timeTask = {        
            date: dateFormatted,
            WorkUnit: [
                {
                    contractId: dropDownSelection.key,
                    description: description,
                    time: time,
                }
            ]
        };
        

        if (this.state.taskId !== -1) {
            timeTask._id = this.state.taskId;
        }
        

        // this.state.writer.write(timeTask);
        fetch('http://localhost:3001/api/task', {
                method: 'POST',
                body: JSON.stringify(timeTask),
                headers: {'Content-Type': 'application/json'}
        });
    }

    descriptionChange = (dataFromChild) => {
        this.setState({ description: dataFromChild ? dataFromChild  : null })
    }

    dropDownChange = (dataFromChild) => {
        this.setState({ selectedProject: dataFromChild });
    }


    timeChangeHandler = (dataFromChild) => {
        this.setState({ time: dataFromChild });
    }

    render() {
        return (
            <div className="m-a w-400px">
                
                <form onSubmit={this.handleSubmit}>
                    <TextArea title="Description:" taskId={this.state.taskId} handler={this.descriptionChange} />
                    <DropDown title="Contract Drop Down" taskId={this.state.taskId} list={this.state.dropDownList} handler={this.dropDownChange} />
                    <Timer taskId={this.state.taskId} handler={this.timeChangeHandler} />
                    <input className="form-submit f-r mt-4em" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}