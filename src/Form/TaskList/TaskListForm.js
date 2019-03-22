import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './TaskListForn.css';


export default class TaskListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        this.setState({ tasks: null });
        console.log('component did mount');
        fetch('http://localhost:3001/api/task')
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.length > 0) {
                    let tasks = data.map((task) => {

                        return (
                            <li key={task.id}>
                                <NavLink to={"/task/" + task.id} id={task.id} className="task-list" >
                                    <span className="task-list__description">{task.description}</span>
                                    <span className="task-list__customer">{task.customer}</span> - <span className="task-list__contract">{task.contract}</span>
                                    <span className="task-list__time"><span className="task-list__time-label">Time:</span><span className="task-list__time-value">{task.time}</span></span>
                                </NavLink>
                            </li>
                        )
                    })
                    this.setState({tasks: tasks});
                } 
            });

    }

    render() {
        return (
            <div>
                <div className="task-list__header">
                    <NavLink to={"/task/-1"} className="button-add">New Task</NavLink>
                </div>

                <ul>
                    {this.state.tasks}
                </ul>
            </div>
        );
    }

}