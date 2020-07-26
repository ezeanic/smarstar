import React, { Component } from 'react';
import {scoreexport} from './components/questions';
import { Link } from 'react-router-dom';

let scoreexports=[];

class Gradebook extends Component {
    constructor() {
        super();
        this.storeLocally = this.storeLocally.bind(this);
    } 
storeLocally(id, score){
    if(id === 1 && score !== null && score !== 0){
      localStorage.setItem('score_1', score);
    }
    else if(id === 2 && score !== null && score !== 0){
      localStorage.setItem('score_2', score);
    }
    else if(id === 3 && score !== null && score !== 0){
      localStorage.setItem('score_3', score);
    }
    else if(id === 4 && score !== null && score !== 0){
      localStorage.setItem('score_4', score);
    }
    else if(id === 5 && score !== null && score !== 0){
      localStorage.setItem('score_5', score);
    }

    let score_1 = localStorage.getItem('score_1');
    let score_2 = localStorage.getItem('score_2');
    let score_3 = localStorage.getItem('score_3');
    let score_4 = localStorage.getItem('score_4');
    let score_5 = localStorage.getItem('score_5');

    if(score_1 !== undefined && score_1 !== null && score_1 !== 0){
      scoreexports[0] = score_1;
    }
    if(score_2 !== undefined && score_2 !== null && score_2 !== -1){
      scoreexports[1] = score_2;
    }
    if(score_3 !== undefined && score_3 !== null && score_3 !== -1){
      scoreexports[2] = score_3;
    }
    if(score_4 !== undefined && score_4 !== null && score_4 !== -1){
      scoreexports[3] = score_4;
    }
    if(score_5 !== undefined && score_5 !== null && score_5 !== -1){
      scoreexports[4] = score_5;
    }
  }
    render() {
        let i = 0;
        
        for(i  = 1; i < 6;i++){
            this.storeLocally(i, scoreexport[i-1])
        }

        return (
            <div id="homepagedashboard">
                <p>Session 1 - {scoreexports[0]} %</p>
                <p>Session 2 - {scoreexports[1]} %</p>
                <p>Session 3 - {scoreexports[2]} %</p>
                <p>Session 4 - {scoreexports[3]} %</p>
                <p>Session 5 - {scoreexports[4]} %</p>
                <Link id="sess" className = "navlist" type="submit" to='/certificate'><li>Get Certificate</li></Link>
            </div>
        );
    } 
}

export default Gradebook;

