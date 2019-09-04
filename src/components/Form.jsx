import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            url: '',
            comment: ''
        };

        this.state = this.initialState
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    };

    render() {
        const { url, comment } = this.state

        return (
            <form>
                <label>URL</label>
                <input
                    type="text"
                    name="url"
                    value={url}
                    onChange={this.handleChange} />
                <label>Comment</label>
                <input
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;