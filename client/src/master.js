import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';


class Master extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  } 

  componentDidMount() {
    let url = `/api/info/`;
    fetch(url)
      .then(res => res.json())
      .then(info => this.setState({info}, () => console.log('Info fetched...', info)))
  }
  
  render() {
    var idchange = this.state.valindex;
    var items = [];
    var user_data = [];

    this.state.info.map(info =>
      <div>
          {info.members.forEach(element => {
            user_data.push(
                <td>{element['fname']}&nbsp;{element['lname']}&nbsp;&nbsp;&nbsp;&nbsp;{element['email']}</td>);
        })}
        {items.push(
        <div id="table_info">
            <tr>
                <td>{info.code}</td>&nbsp;&nbsp;
                {user_data}
            </tr>
        </div>
        )}
      </div>
    )

    return (
      <div class="App-client">
        <h2>Info</h2>
        <div id="table_info_header">
            <tr>
                <td><strong>Company Code</strong></td>&nbsp;&nbsp;
                <td><strong>Members Names</strong></td>&nbsp;&nbsp;
                <td><strong>Members Email</strong></td>&nbsp;&nbsp;
            </tr>
    </div>
    {items}
      </div>
     
    );
  }

}



export default Master;
