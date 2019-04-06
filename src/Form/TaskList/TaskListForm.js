import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './TaskListForn.css';
import JsonWriter from './JsonWriter';
import Task from './Task';


export default class TaskListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            existingTasks: props.list
        };

        this.handleDownload = this.handleDownload.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
                        return <Task task={task} existingTasks={this.state.existingTasks} />
                    })
                    this.setState({ tasks: tasks });
                }
            });
    }

    handleDownload() {

        fetch("http://localhost:3001/api/tasks")
            .then(response => response.json())
            .then((tasks) => {

                const date = new Date();
                const dateFormatted = date.getMonth() + 1 + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();

                const timeTask = {
                    date: dateFormatted,
                };

                const existingTasks = this.state.existingTasks;

                tasks.forEach(function (task) {
                    task.time = ((((task.time / 1000) / 60) / 60)).toFixed(2);

                    existingTasks.forEach(function (existingTask) {
                        if (task.contractId === existingTask.key) {
                            task.contract = existingTask.contract;
                            task.customer = existingTask.customer;
                        }
                    });
                });

                timeTask.WorkUnit = tasks;

                const writer = new JsonWriter();
                writer.write(timeTask);
            });
    }

    handleDelete() {
        fetch("http://localhost:3001/api/task", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json());
        window.location.reload();
    }


    render() {
        return (
            <div>
                <div className="task-list__header">
                    {this.showDeleteButton()}
                    {this.showDownloadButton()}
                    <NavLink to={"/task/-1"} className="button-add">New Task</NavLink>
                </div>
                <ul>
                    {this.state.tasks}
                </ul>
            </div>
        );
    }



    showDownloadButton() {
        if (this.state.tasks !== null) {
            return <a href="#" className="button-download" onClick={this.handleDownload}>Download</a>;
        }
    }

    showDeleteButton() {
        if (this.state.tasks !== null) {
            return <a href="#" className="button-delete" onClick={this.handleDelete}>Delete</a>;
        }
    }
}