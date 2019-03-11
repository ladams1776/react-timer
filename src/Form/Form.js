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
            description: 'Please Fill in the description here.', // text area
            time: 0,     // from timer
            project: null,  // from drop down
            task: null,     // from drop down
            writer: new JsonWriter()
        };
        // this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit(this);
        // this.dropDownChange = this.dropDownChange(this);
        // this.timerChangeHandler = this.timerChangeHandler(this);
    }

    // handleDescriptionChange() {
    //     console.log('description changed');
    //     this.setState({
    //         description: 'yup'
    //     });
    // }

    handleSubmit(event) {
        // this.state.writer.write(this.state.project, this.state.task, this.state.time, this.state.description);
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
        // event.preventDefault();
        console.log('yup');
        // let time = this.timerChangeHandler();
        // console.log(time);
    }


    // dropDownChange(event) {
    //     this.setState({ project: event.target.value });
    // }


    timeChange = (dataFromChild) => {
       // this.setState({ time: event.target.value });
       console.log(dataFromChild)
       console.log('timer was changed');
        console.log("Time passed is: " + dataFromChild);
        //@todo: we want to set the state of the time in the form, but we want this to come from the Timer
    //    this.setState({ time: 1 });
    //    this.state.time = time;
       
    }

    render() {
        return (
            <div className="m-a w-400px">
                <form onSubmit={this.handleSubmit}>
                    <TextArea title="Description:" />
                    <DropDown title="Contract Drop Down"  />
                    <Timer handler={this.timeChange}/>
                    <input className="form-submit f-r mt-4em" type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}