import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'


class Nav extends React.Component{

  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "20%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    var links = ['/', 'sessone', '/sesstwo', '/sessthree', '/sessfour', '/sessfive', './gradebook'];
    var session = ['USER BOARD', 'Physical', 'Developmental', 'Behavioral/Emotional', 'Sensory Impaired', 'Engagement', 'Gradebook'];
    var items = [];

    for (const [index, value] of links.entries()) {
      items.push(<div key={index.toString()} ><Link className = "navlist" to={value}><li>{session[index]}</li></Link></div>)
    }
    return (

    <div>
      <img id="smartimage" width="15%" src="//static1.squarespace.com/static/5e78ee7048e8012438adabc0/t/5e833304e78b6956d2d8d629/1586360599524/?format=1500w" alt="Smart STAR"></img><br/>
      <div id="openSidenav" className="opensidenav">
      <span onClick={this.openNav} style={{color: 'red'}} cursor="pointer">&#9776;</span><br/><br/>
      </div>
      <div id="mySidenav" className="sidenav">
      <span id="opendash" className="closebtn" style={{color: 'red'}} onClick={this.closeNav} cursor="pointer">&times;</span><br/><br/>
            {items}
      </div>
      
    </div>
  );
  }
}

export default Nav;
