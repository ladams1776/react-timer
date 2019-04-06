import React from 'react';
import {
    NavLink
} from "react-router-dom";


export default class Task extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
            existingTasks: this.props.existingTasks,
        };
    }


    render() {
        return (
            <li key={this.state.task._id}>
                <NavLink to={"/task/" + this.state.task._id} id={this.state.task._id} className="task-list" >
                    <span className="task-list__time"><span className="task-list__time-label">Time: </span> <span className="task-list__time-value"> {((((this.state.task.time / 1000) / 60) / 60)).toFixed(2)}</span></span>
                    <span className="task-list__description">{this.state.task.description}</span>
                    <span className="task-list__customer">{this.state.existingTasks[this.state.task.contractId].customer}</span> - <span className="task-list__contract">{this.state.existingTasks[this.state.task.contractId].customer}</span>
                </NavLink>
            </li>
        );
    }


    retrieveCustomerNameFromContractId(contractId) {
        const existingTasks = this.state.existingTasks;
        let customerName;

        existingTasks.forEach((task) => {
            if (task.key === contractId) {
                customerName = task.customer;
            }
        });

        return customerName;
    }

    retrieveContractNameFromContractId(contractId) {
        const existingTasks = this.state.existingTasks;
        let contractName;

        existingTasks.forEach((task) => {
            if (task.key === contractId) {
                contractName = task.contract;
            }
        });

        return contractName;
    }
}