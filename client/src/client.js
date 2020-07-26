import React, { Component } from 'react';
import './App.css';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[0, "", "", "", "", ""]
    };
    this.Change = this.Change.bind(this);
  } 

  Change(e) {
    let a = this.state.data;
    a[e.target.id] = e.target.value;
    this.setState({
      data: a
    });
  };

  render() {
    let link = `http://localhost:5000/api/questions/${this.state.data[0]}/${this.state.data[1]}/${this.state.data[2]}/${this.state.data[3]}/${this.state.data[4]}/${this.state.data[5]}`;
    return (
      <div className="App-client">
        <form action={link} method="POST">
          <h1>Private Client Usage</h1>
          <input type="text" id="0" placeholder="Question no." name="param1" onChange={this.Change}/><br/><br/>
          <input type="text" id="1" placeholder="Question" name="param2" onChange={this.Change}/><br/><br/>
          <input type="text" id="2" placeholder="Option 1" name="param3" onChange={this.Change}/><br/><br/>
          <input type="text" id="3" placeholder="Option 2" name="param4" onChange={this.Change}/><br/><br/>
          <input type="text" id="4" placeholder="Option 3" name="param5" onChange={this.Change}/><br/><br/>
          <input type="text" id="5" placeholder="correct answer" name="param6" onChange={this.Change}/><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Client;