import React from 'react';

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
            <div class="text-area">
                <label
                    class="text-area__label"
                    htmlFor="description">
                    {this.state.labelTitle}
                </label>
                <textarea class="text-area__description" name="description" description="Project Description" onChange={this.handleDescriptionChange} />
            </div>
        )
    }
}