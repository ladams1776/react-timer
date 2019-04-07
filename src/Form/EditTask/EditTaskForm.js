import React from 'react';
import ReactRouterDom  from "react-router-dom";
import DropDown from '../../components/DropDown/DropDown';
import Timer from '../../components/Timer/Timer';
import TextArea from '../../components/TextArea/TextArea';
import './EditTaskForm.css';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import { throws } from 'assert';


export default class EditTaskForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskId: this.props.match.params.id,
            description: '', // text area
            time: 0,     // from timer
            selectedProject: 0,
            dropDownList: this.props.list,
            isFlashMessageShowing: 0
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
                    time: time,
                    contractId: dropDownSelection.key,
                    description: description,
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
        })
        .then(e => {
            if (e.status === 200) {
                let isFlashMessageShowing = this.state.isFlashMessageShowing;
                isFlashMessageShowing = 1;
                this.setState({isFlashMessageShowing: isFlashMessageShowing});
            }
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
            <div className="m-a w-400px mt-4em">
                <FlashMessage message="Success" opacity={this.state.isFlashMessageShowing} handler={this.updateFlashMessage}/>
                <form onSubmit={this.handleSubmit}>
                    <TextArea title="Description:" taskId={this.state.taskId} handler={this.descriptionChange} />
                    <DropDown title="Contract Drop Down" taskId={this.state.taskId} list={this.state.dropDownList} handler={this.dropDownChange} />
                    <Timer taskId={this.state.taskId} handler={this.timeChangeHandler} />
                    <input className="form-submit f-r mt-4em" type="submit" value="Submit" />
                </form>
            </div>
        );
    }


    updateFlashMessage = (isVisible) => {
        if (this.state.isFlashMessageShowing) {
            this.setState({isFlashMessageShowing: isVisible});            
        }
    }

}