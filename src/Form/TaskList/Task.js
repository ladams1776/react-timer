import React from 'react';
import {
    NavLink
} from "react-router-dom";


export default class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
            existingTasks: this.props.existingTasks,
            key: this.props.task.id,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        fetch(`/api/task/${this.state.task._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json());
        window.location.reload();
    }


    render() {
        return (
            <li key={this.state.task._id}>
                <NavLink to={"/task/" + this.state.task._id} id={this.state.task._id} className="task-list" >
                    <span className="task-list__time">
                        <span className="task-list__time-label">Time:
                    </span>
                        <span className="task-list__time-value"> {((((this.state.task.time / 1000) / 60) / 60)).toFixed(2)}
                            <button onClick={this.onClick} className="task-list__delete-btn">X</button>
                        </span>
                    </span>
                    <span className="task-list__description">{this.state.task.description}</span>
                    <span className="task-list__customer">{this.state.existingTasks[this.state.task.contractId].customer}</span> - <span className="task-list__contract">{this.state.existingTasks[this.state.task.contractId].customer}</span>
                </NavLink>
            </li>
        );
    }
}