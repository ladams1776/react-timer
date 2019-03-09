import React from 'react';
import DropDown from '../components/DropDown/DropDown';
import Timer from '../components/Timer/Timer';
import TextArea from '../components/TextArea/TextArea';


export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            description: 'Please Fill in the description here.' , // text area
            time: null,     // from timer
            project: null,  // from drop down
            task: null,     // from drop down
        };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit(this);
    }

    handleDescriptionChange(event) {
        this.setState({ 
            description: event.target.value 
        });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }


    dropDownChange(event) {
        this.setState({project: event.target.value});
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <TextArea title="Project:"/>
                <DropDown title="Contract Drop Down" onChange={this.dropDownChange}/>
                <label>
                    <Timer />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}