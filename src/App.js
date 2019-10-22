import React, { Component } from 'react'
import './App.css'
import Form from './components/Form';
import Clock from './components/Clock';

import СlockModel from './Models/ClockModel'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clocks: [new СlockModel("Moscow", 3), new СlockModel("Tokyo", 9)]
    };
  }

  handleAdd = (clock) => {
    this.setState(prevClocks => prevClocks.clocks.push(clock));
  }

  handleDel = (id) => {
    this.setState({
      clocks: this.state.clocks.filter(clock => clock.id !== id)
    });
  }

  render() {
    return (
      <>
        <Form onAdd={this.handleAdd} />

        <div className="Clock-row">
          {this.state.clocks.length > 0 ? this.state.clocks.map(clock => <Clock name={clock.name} timezone={clock.timezone} key={clock.id} id={clock.id} onDel={this.handleDel} />) : null}
        </div>
      </>
    )
  }
}
