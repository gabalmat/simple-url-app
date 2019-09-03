import React, {Component} from 'react'

class App extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        const url = 'http://127.0.0.1:5000/api/url/1'

        fetch(url)
        .then(result => result.json())
        .then(result => {
            console.log(result)
            this.setState({
                data: result.comments,
            })
        })
    }

    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry.comment}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App