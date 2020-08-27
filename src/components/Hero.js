import React, { Component } from 'react';
import logo from '../assets/logo.svg';

export default class Hero extends Component {
  constructor() {
    super();

    this.state = {
      linkText: 'Learn React!',
      currentDate: new Date(),
      dummyData: { 1: 'Eric', 2: 'Marcus' }
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    console.log('fetching data...');

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);

      this.setState(_state => ({
        realData: data.toString()
      }));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <img src={logo} className="App-logo" alt="logo" />

        <p>{this.props.heading}</p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">{this.state.linkText}</a>

        <p>Todays date: {this.state.currentDate.toLocaleDateString()}</p>

        {Object.entries(this.state.dummyData).map(([key, value], i) =>
          <p key={key}>{value} - {i}</p>
        )}

        <button onClick={this.fetchData}>Fetch</button>

        <div>{this.state.realData}</div>
      </div>
    )
  }

  componentDidMount() {
    console.log('test');
    console.log('test2');
  }
}
