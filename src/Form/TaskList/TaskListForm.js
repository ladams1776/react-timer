import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './TaskListForn.css';
import JsonWriter from './JsonWriter';



export default class TaskListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            existingTasks: props.list,
            writer: new JsonWriter()
        };

        this.showPrintTasks = this.showPrintTasks.bind(this);
    }

    componentDidMount() {
        this.setState({ tasks: null });
        console.log('component did mount');
        fetch('http://localhost:3001/api/tasks')
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.length > 0) {
                    let tasks = data.map((task) => {
                        return (
                            <li key={task._id}>
                                <NavLink to={"/task/" + task._id} id={task._id} className="task-list" >
                                    <span className="task-list__time"><span className="task-list__time-label">Time: </span> <span className="task-list__time-value"> {((((task.time / 1000) / 60) / 60)).toFixed(2)}</span></span>
                                    <span className="task-list__description">{task.description}</span>
                                    <span className="task-list__customer">{this.retrieveCustomerNameFromContractId(task.contractId)}</span> - <span className="task-list__contract">{this.retrieveContractNameFromContractId(task.contractId)}</span>
                                </NavLink>
                            </li>
                        )
                    })
                    this.setState({ tasks: tasks });
                }
            });
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


    handleDownload (event) {

        //TODO: left off here 4/5/2019 - 7:11AM

        // fetch("http://localhost:3001/api/tasks")
        // .then(response => response.json())
        // .then((tasks) => {

        //     postingTasks = [];

        //     const date = new Date();
        //     const timeTask = {        
        //         date: dateFormatted,
        //         WorkUnit: [
        //             {
        //                 contractId: dropDownSelection.key,
        //                 description: description,
        //                 time: time,
        //             }
        //         ]
        //     };

        //     for (let i = 0; i < tasks.WorkUnit.length; i++) {

        //     }

        // });
    }


    render() {
        return (
            <div>
                <div className="task-list__header">
                    <NavLink to={"/task/-1"} className="button-add">New Task</NavLink>
                    { this.showPrintTasks() }
                </div>
                <ul>
                    {this.state.tasks}
                </ul>
            </div>
        );
    }



    showPrintTasks() {
        if (this.state.tasks !== null) {
            return <button className="button-download" click={this.handleDownload}>Download Tasks</button>;
        }
    }
   

}