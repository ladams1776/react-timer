import React from 'react';
import ReactRouterDom  from "react-router-dom";
import DropDown from '../../components/DropDown/DropDown';
import Timer from '../../components/Timer/Timer';
import TextArea from '../../components/TextArea/TextArea';
import './EditTaskForm.css';
import JsonWriter from './JsonWriter';

export default class EditTaskForm extends React.Component {

    constructor(props) {
        console.log('EditTaskForm is called');
        super(props);

        this.state = {
            description: '', // text area
            time: 0,     // from timer
            selectedProject: 0,
            dropDownList: this.props.list,
            writer: new JsonWriter()
        };

        // this.handleSubmit = this.handleSubmit(this);
        // this.dropDownChange = this.dropDownChange(this);
        // this.timeChangeHandler = this.timeChangeHandler(this);
    }


    //@todo: this is firing after the child component is rendered so I am not getting the description in the TextArea.
    //@todo: I need to do something like do this request in the child first. 

    //@todo: i sometimes see this.
    componentWillMount() {
        const taskId = this.props.match.params.id;
        
        if (taskId !== -1) {
            fetch('http://localhost:3001/api/task/'+taskId)
            .then(response => {
                return response.json();
            })
            .then((task) => {
                const id = task._id;
                this.setState({
                  description: task.description,
                  time: task.time,
                  selectedProject: task.contractId
                });
            });
        }
      }
  
  
 

    textChangeHandler = (dataFromChild) => {
        this.setState({
            description: dataFromChild
        });
    }

    handleSubmit = (event) => {
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
        
        

        // this.state.writer.write(timeTask);
        fetch('http://localhost:3001/api/task', {
                method: 'POST',
                body: JSON.stringify(timeTask),
                headers: {'Content-Type': 'application/json'}
        });
    }

    descriptionChange = (dataFromChild) => {
        this.setState({ description: dataFromChild })
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
                    <TextArea title="Description:" description={this.state.description} handler={this.descriptionChange} />
                    <DropDown title="Contract Drop Down" list={this.state.dropDownList} handler={this.dropDownChange} />
                    <Timer handler={this.timeChangeHandler} />
                    <input className="form-submit f-r mt-4em" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}