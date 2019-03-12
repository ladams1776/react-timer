import React from 'react';
import DropDown from '../components/DropDown/DropDown';
import Timer from '../components/Timer/Timer';
import TextArea from '../components/TextArea/TextArea';
import './Form.css';
import JsonWriter from './JsonWriter';

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: 'Project Description', // text area
            time: 0,     // from timer
            selectedProject: 0,
            dropDownList:  this.props.list,
            writer: new JsonWriter()
        };

        this.handleSubmit = this.handleSubmit(this);
        // this.dropDownChange = this.dropDownChange(this);
        // this.timeChangeHandler = this.timeChangeHandler(this);
    }

    textChangeHandler = (dataFromChild) => {
        this.setState({
            description: dataFromChild
        });
    }

    handleSubmit(event) {
        let d = this.state.dropDownList[this.state.selectedProject]
        // this.state.writer.write(this.state.project, this.state.task, this.state.time, this.state.description);
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
        // let time = this.timerChangeHandler();
        // console.log(time);
    }


    dropDownChange = (dataFromChild) => {
        // this.setState({ selectedProject: dataFromChild });
    }


    timeChangeHandler = (dataFromChild) => {
       this.setState({ time: dataFromChild });       
    }

    render() {
        return (
            <div className="m-a w-400px">
                <form onSubmit={this.handleSubmit}>
                    <TextArea title="Description:" description={this.state.description} handler={this.textChangeHandler} />
                    <DropDown title="Contract Drop Down" list={this.state.dropDownList} handler={this.dropDownChange} />
                    <Timer handler={this.timeChangeHandler}/>
                    <input className="form-submit f-r mt-4em" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}