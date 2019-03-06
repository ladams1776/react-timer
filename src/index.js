import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.js';
import Select from 'react-select';


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
                <label for="description">
                    Description:
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
                </label>
                <br/>
                <textarea name="description" value={this.state.value} onChange={this.handleSubmit}/>
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






class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: 1,

            listOpen: true,
            headerTitle: this.props.title,
            items: [
                {
                    value: 0,
                    label: "New York",
                    selected: false,
                    key: 'location'
                },
                {
                    value: 1,
                    label: 'Dublin',
                    selected: false,
                    key: 'location'
                },
                {
                    value: 2,
                    label: 'California',
                    selected: false,
                    key: 'location'
                },
                {
                    value: 3,
                    label: 'Istanbul',
                    selected: false,
                    key: 'location'
                },
                {
                    value: 4,
                    label: 'Izmir',
                    selected: false,
                    key: 'location'
                },
                {
                    value: 5,
                    label: 'Oslo',
                    selected: false,
                    key: 'location'
                }
            ]
        }

        this.handleClickOutside.bind(this);
        this.toggleList.bind(this);
        this.handleChange.bind(this);
    }

    handleClickOutside() {
        this.setState({
            listOpen: true
        });
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    handleChange(selectedOption) {
        console.log(selectedOption);
        this.setState({selectedOption: selectedOption.value});
        // console.log(`Option selected: `, selectedOption);
    }

    render() {
        // const { list } = this.props;
        // const { listOpen, headerTitle } = this.state;
        const { selectedOption } = this.state;
        console.log(selectedOption);
        return (
            <select value={selectedOption} onChange={this.handleChange}>
                this.state.items.forEach( (item) => {
                    <option value></option>
                });
            </select>
        );
    }

}




// ========================================

ReactDOM.render(
    <Form />,
    // <DropDown title="Contract Drop Down"/>,
    document.getElementById('root')
);