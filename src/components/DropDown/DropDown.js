import React from 'react';
import './DropDown.css';


export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: {
                value: 0
            },
            headerTitle: this.props.title,
            items: [
                {
                    value: 0,
                    label: "New York",
                    selected: false,
                    key: 0
                },
                {
                    value: 1,
                    label: 'Dublin',
                    selected: false,
                    key: 1
                },
                {
                    value: 2,
                    label: 'California',
                    selected: false,
                    key: 2
                },
                {
                    value: 3,
                    label: 'Istanbul',
                    selected: false,
                    key: 3
                },
                {
                    value: 4,
                    label: 'Izmir',
                    selected: false,
                    key: 4
                },
                {
                    value: 5,
                    label: 'Oslo',
                    selected: false,
                    key: 5
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const newValue = event.currentTarget.selectedIndex;
        this.setState({
            selectedOption: {
                value: newValue
            }
        });

        // this.props.handle(event);
    }

    render() {

        const { selectedOption } = this.state;
        const { headerTitle } = this.state;
        // console.log(selectedOption);
        return (
            <div className="drop-down">
                <label className="drop-down__title">{headerTitle}: </label>
                <select className="drop-down__select" value={selectedOption.value} onChange={this.handleChange}>
                    {this.state.items.map(item => {
                        console.log(item);
                        return (
                            <option
                                className="drop-down__option"
                                key={item.key}
                                label={item.label}
                                value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
                </select>

            </div>
        );
    }

}