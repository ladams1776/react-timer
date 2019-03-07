import React from 'react';


export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: {
                value: 0
            },

            listOpen: true,
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

        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.toggleList = this.toggleList.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(args) {
        console.log(args);
        // this.setState({ selectedOption: selectedOption.value });
        // console.log(`Option selected: `, selectedOption);
        const newValue = args.currentTarget.selectedIndex;
        // const label = selectedOption.label;
        // const preexistingOption = this.state.selectedOption;
        // preexistingOption.value = value;
        // preexistingOption.label = label;
        // preexistingOption.key = selectedOption.key;
        this.setState({selectedOption: { 
            value: newValue
        }});
    }

    render() {
        
        const { selectedOption } = this.state;
        // console.log(selectedOption);
        return (
            <select value={selectedOption.value} onChange={this.handleChange}>
                {this.state.items.map(item => {
                    console.log(item);
                    return (
                        <option 
                            key={item.key}
                            label={item.label}
                            value={item.value}>
                            {item.label}
                        </option>
                    );
                })}
            </select>
        );
    }

}