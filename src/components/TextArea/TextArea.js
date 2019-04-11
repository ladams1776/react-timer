import React from 'react';
import ReactRouterDom from "react-router-dom";

import './TextArea.css';


export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: props.taskId,
            labelTitle: props.title,
            description: '',
        }
    }



    componentDidMount() {
        const taskId = this.state.taskId;

        if (taskId !== -1) {
            fetch('/api/task/' + taskId)
                .then(response => {
                    return response.json();
                })
                .then((task) => {
                    const description = task.description ? task.description : '';
                    this.setState({
                        description: description,
                    });

                    this.props.handler(description);

                });
        }
    }

    handleChange = (e) => {
        const newDescription = e.target.value;
        this.setState({ 
            description: newDescription
        });
        this.props.handler(newDescription);
    }

    render() {

        return (
            <div className="text-area">
                <label
                    className="text-area__label"
                    htmlFor="description"
                >
                    {this.state.labelTitle}
                </label>
                <textarea className="text-area__description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    maxLength="254"
                    rows="5"
                    cols="52"
                />
                <span className="text-area__character-length">{this.state.description.length} character(s)</span>
            </div>
        )
    }
}