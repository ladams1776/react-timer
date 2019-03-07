import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.js';
import DropDown from './DropDown';

// import Select from 'react-select';


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: 'Please Fill in the description here.' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="description">
                    Description:
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                </label>
                <br />
                <textarea name="description" value={this.state.value} onChange={this.handleChange} />
                <label>
                    <DropDown title="Contract Drop Down" />
                </label>
                <label>
                    <Timer />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}






// ========================================

ReactDOM.render(
    <Form />,
    // <DropDown title="Contract Drop Down"/>,
    document.getElementById('root')
);