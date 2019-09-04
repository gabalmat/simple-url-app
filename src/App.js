import React, {Component} from 'react';
import './App.css';
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'

class App extends Component {
    backendURL = 'http://127.0.0.1:5000'
    state = {
        data: []
    }

    // GET request to API for all urls
    componentDidMount() {
        const url = this.backendURL + '/api/urls/'
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result
            })
        })
    }

    handleSubmit = urlEntry => {
        // POST the URL and Comment if one exists
        const endpoint = this.backendURL + '/api/addurl'
        const body = {
            uri: urlEntry.url
        }

        if (urlEntry.hasOwnProperty('comment')) {
            body['comment'] = urlEntry.comment
        }

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(result => result.json())
        .then(result => {
            if (result.hasOwnProperty('status') && result.status === 'error') {
                alert(result.message)
            }
            else {
                const entry = {
                    uri: result.uri,
                    comments: result.comments
                }

                this.setState({data: [entry, ...this.state.data]});
            }
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="container">
                <h1>Simple URL App</h1>
                <h4>Add a New URL and Comment:</h4>

                <Form handleSubmit={this.handleSubmit} />

                <Table
                    apiData={data}
                />
            </div>
        );
    }
}

export default App;
