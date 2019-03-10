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
                        description="Project Description" 
                        // onChange={this.props.handler} 
                    />
            </div>
        )
    }
}