import React, {Component} from 'react';
import './App.css';
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'

class App extends Component {
  state = {
    data: []
  }

  // GET request to API for all urls
  componentDidMount() {
      const url = 'http://127.0.0.1:5000/api/urls/'

      fetch(url)
          .then(result => result.json())
          .then(result => {
              this.setState({
                  data: result
              })
          })
  }

  // handleSubmit = character => {
  //   this.setState({characters: [...this.state.characters, character]});
  // }

  render() {
    const { data } = this.state;

    return (
        <div className="container">
          <h1>Simple URL App</h1>
          <p>Add a URL with comments to the table</p>

          <h3>Add New</h3>
          {/*<Form handleSubmit={this.handleSubmit} />*/}

          <Table
              apiData={data}
          />
        </div>
    );
  }
}

export default App;
