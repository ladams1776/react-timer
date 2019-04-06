import React from 'react';
import './DropDown.css';


export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskId: this.props.taskId ? this.props.taskId : -1,
            selectedOption: {
                value: 0
            },
            headerTitle: this.props.title,
            items: this.props.list
        }

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        const taskId = this.state.taskId;

        if (taskId !== -1) {
            fetch('http://localhost:3001/api/task/' + taskId)
                .then(response => {
                    return response.json();
                })
                .then((task) => {
                    
                    const contractId = task.contractId ? task.contractId : 0;

                    this.setState({
                        selectedOption: {value: contractId},
                    });

                    this.props.handler(contractId);
                });
        }
    }


    handleChange(event) {
        const newValue = event.currentTarget.selectedIndex;
        this.setState({
            selectedOption: {
                value: newValue
            }
        });

        this.props.handler(newValue);
    }


    render() {

        const { headerTitle } = this.state;
        return (
            <div className="drop-down">
                <label className="drop-down__title">{headerTitle}: </label>
                <select className="drop-down__select" value={this.state.selectedOption.value} onChange={this.handleChange}>
                    {this.state.items.map(item => {
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