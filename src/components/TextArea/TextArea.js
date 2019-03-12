import React from 'react';
import './TextArea.css';


export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelTitle: props.title,
            description: props.description
        }
    }

    handleChange = (e) => {
        const newDescription = e.target.value;
        this.setState({description: newDescription});
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
                    />
            </div>
        )
    }
}